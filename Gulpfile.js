var gulp = require('gulp'),
		sass = require('gulp-sass'),
		neat = require('node-neat'),
		browserify = require('gulp-browserify'),
		uglify = require('gulp-uglify');

///////all the js to one min file///////////////////

var jsNodeModules = {
	js: './node_modules/**/*.js'
};

gulp.task('modules', function () {
	return gulp.src([jsNodeModules.js])
		.pipe(browserify())
		.pipe(uglify())
		.pipe(gulp.dest('./app/js'));
	console.log('modules');
});

var jsPaths = {
	js: './app/**/*.js'
};

gulp.task('js', function () {
	return gulp.src([jsNodeModules.js, jsPaths.js])
   .pipe(browserify())
   .pipe(uglify())
   .pipe(gulp.dest('./app/js'));
	console.log('js');
});

//all the sass to css//////////////////////////////////

var csspaths = {
	scss: './app/**/*.scss'
};

gulp.task('sass', function () {
	return gulp.src(csspaths.scss)
		.pipe(sass({
		includePaths: [['run'].concat(neat), 
									 require('node-bourbon').includePaths,
									 require('node-neat').includePaths
									]
	}))
		.pipe(gulp.dest('./app/css'));
		console.log('css');
});

gulp.task('run',function(){
	gulp.start('sass');
	gulp.start('modules');
	gulp.start('js');
});

gulp.task("watch", function() {
	gulp.watch("./app/sass/*.scss", ["sass"]);
	gulp.watch("./app/*.js", ["js"]);
	gulp.watch("./node_modules/*.js", ["modules"]);
});