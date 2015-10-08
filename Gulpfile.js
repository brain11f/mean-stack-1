var gulp = require('gulp'),
		sass = require('gulp-sass'),
		neat = require('node-neat').includePaths;

var paths = {
	scss: './app/*.scss'
};

gulp.task('styles', function () {
	return gulp.src(paths.scss)
		.pipe(sass({
		includePaths: ['styles'].concat(neat),
		includePaths: require('node-bourbon').includePaths
	}))
		.pipe(gulp.dest('./app/css'));
});

gulp.task('default',function(){
	gulp.start('styles');
});