'use strict';

var gulp = require('gulp');

gulp.task('default', function () {
	var autoprefixer = require('autoprefixer-core');
	var minifyCSS    = require('gulp-minify-css');
	var postcss      = require('gulp-postcss');
	var stylus       = require('gulp-stylus');
	var sourcemaps   = require('gulp-sourcemaps');

	return gulp.src('sanitize.styl')
		.pipe(sourcemaps.init())
		.pipe(stylus())
		.pipe(postcss([ autoprefixer({
			browsers: ['last 2 version']
		}) ]))
		.pipe(minifyCSS({
			keepBreaks: true
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./dist'));
});