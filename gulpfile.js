'use strict';

var gulp = require('gulp'),
	less = require('gulp-less'),
	livereload = require('gulp-livereload');

gulp.task('reloadHtml', function() {
	return gulp.src('index.html')
		.pipe(livereload());
});

gulp.task('watchFiles', function() {
	gulp.watch('index.html', ['reloadHtml']);
	gulp.watch('*js', ['reloadHtml']);
	gulp.watch('*css', ['reloadHtml']);
	livereload.listen({
		start: true
	});
});

gulp.task('default', ['watchFiles']);