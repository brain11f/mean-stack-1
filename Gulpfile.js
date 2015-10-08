var gulp = require('gulp'),
		sass = require('gulp-sass'),
		neat = require('node-neat'),
		browserify = require('browserify'),
		transform = require('vinyl-transform'),
		uglify = require('gulp-uglify');

///////all the js to one min file///////////////////

var angularjs = {
	js: './node_modules/angular/angular.js'
};

var angularRouteJs = {
	js: './node_modules/angular-route/angular-route.js'
};

var jsPaths = {
	js: './app/scripts/*.js'
};

var jsindex = {
	js: './app/app.js'
};

gulp.task('js', function () {
	return gulp.src([angularjs.js, angularRouteJs.js, jsPaths.js, jsindex.js])
		.pipe(browserify)
//   .pipe(uglify())
		.pipe(gulp.dest('./app/public/js'));
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
		.pipe(gulp.dest('./app/public/css'));
});

gulp.task('run',function(){
	gulp.start('sass');
	gulp.start('js');
});

gulp.task("watch", function() {
	gulp.watch("./app/sass/*.scss", ["sass"]);
	gulp.watch(['./node_modules/angular/angular.js', './node_modules/angular-route/angular-route.js', './app/app.js', './app/script/**/*js'], ['js']);
});