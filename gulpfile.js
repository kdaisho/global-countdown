'use strict';

var gulp = require('gulp'),
	less = require('gulp-less'),
	uglify = require("gulp-uglify"),
	maps = require("gulp-sourcemaps"),
	rename = require("gulp-rename"),
	livereload = require('gulp-livereload');

gulp.task('reloadHtml', function() {
	return gulp.src('index.html')
		.pipe(livereload());
});

gulp.task('less', function() {
    gulp.src('css/*.less')
        .pipe(less())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }));
});

gulp.task('minifyScripts', function() {
	return gulp.src('js/countdown.js')
		.pipe(maps.init())
		.pipe(rename('countdown.min.js'))
		.pipe(uglify())
		.pipe(maps.write('./'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('watchFiles', function() {
	gulp.watch('index.html', ['reloadHtml']);
	gulp.watch('js/*.js', ['reloadHtml']);
	gulp.watch('css/*.css', ['reloadHtml']);
	gulp.watch('css/*.less', ['less']);
	livereload.listen({
		start: true
	});
});

gulp.task('default', ['watchFiles']);

gulp.task('build', ['minifyScripts'], function() {
	return gulp.src(['js/countdown.js'], { base: './' })
		.pipe(gulp.dest('dist'));
});