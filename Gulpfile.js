var gulp = require('gulp'),
		sass = require('gulp-sass'),
		neat = require('node-neat').includePaths;

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
