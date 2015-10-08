var gulp = require('gulp'),
		sass = require('gulp-sass'),
		neat = require('node-neat'),
		browserify = require('gulp-browserify'),
		uglify = require('gulp-uglify');

///////all the js to one min file///////////////////

var angularjs = {
	js: './node_modules/angular/angular.js'
};

gulp.task('angular', function () {
	return gulp.src([angularjs.js])
		.pipe(browserify())
		.pipe(uglify())
		.pipe(gulp.dest('./app/js'));
	console.log('angular');
});

var angularRouteJs = {
	js: './node_modules/angular-route/angular-route.js'
};

gulp.task('angularRoute', function () {
	return gulp.src([angularRouteJs.js])
		.pipe(browserify())
		.pipe(uglify())
		.pipe(gulp.dest('./app/js'));
	console.log('angularRoute');
});


var jsPaths = {
	js: './app/**/*.js'
};

gulp.task('js', function () {
	return gulp.src([jsPaths.js])
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
	gulp.start('angular');
	gulp.start('angularRoute');
	gulp.start('js');
});

gulp.task("watch", function() {
	gulp.watch("./app/sass/*.scss", ["sass"]);
	gulp.watch("./node_modules/angular/angular.js", ["angular"]);
	gulp.watch("./node_modules/angular-route/angular-route.js", ["angularRoute"]);
	gulp.watch("./app/*.js", ["js"]);
});