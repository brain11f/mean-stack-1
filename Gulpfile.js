var gulp = require('gulp'),
		sass = require('gulp-sass'),
		neat = require('node-neat'),
		browserify = require('gulp-browserify'),
		uglify = require(‘gulp-uglify’);

gulp.task(‘browserify’, function () {
	return gulp.src([‘./src/*.js’])
   .pipe(browserify())
   .pipe(uglify())
   .pipe(gulp.dest(‘./dist’));
});

var paths = {
	scss: './app/*.scss'
};

gulp.task('run', function () {
	return gulp.src(paths.scss)
		.pipe(sass({
		includePaths: [['run'].concat(neat), 
									 require('node-bourbon').includePaths,
									 require('node-neat').includePaths
									]
	}))
		.pipe(gulp.dest('./app/css'));
});

gulp.task('default',function(){
	gulp.start('run');
});