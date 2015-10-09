var gulp = require('gulp'),
		sass = require('gulp-sass'),
		neat = require('node-neat'),
		browserify = require('browserify'),
		source = require('vinyl-source-stream'),
		uglify = require('gulp-uglify'),
		rename = require('gulp-rename'),
		es = require('event-stream');

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

gulp.task('browserify', function() {
	// we define our input files, which we want to have
	// bundled:
	var files = [
		'./node_modules/angular/angular.js',
		'./node_modules/angular-route/angular-route.js',
		'./app/app.js',
		'./app/scripts/blog_details.directive.js',
		'./app/scripts/blog_form.ctrl.js',
		'./app/scripts/blog.ctrl.js',
		'./app/scripts/blog.service.js',
		'./app/scripts/blogposts.ctrl.js'
	];
	// map them to our stream function
	var tasks = files.map(function(entry) {
		return browserify({ entries: [entry] })
			.bundle()
			.pipe(source(entry))
		// rename them to have "bundle as postfix"
			.pipe(rename({
			extname: '.bundle.js'
		}))
			.pipe(gulp.dest('./app/public/js'));
	});
	// create a merged stream
	return es.merge.apply(null, tasks);
});

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
	gulp.start('browserify');
});

gulp.task("watch", function() {
	gulp.watch("./app/sass/*.scss", ["sass"]);
	gulp.watch(['./node_modules/angular/angular.js', './node_modules/angular-route/angular-route.js', './app/app.js', './app/script/**/*js'], ['browserify']);
});