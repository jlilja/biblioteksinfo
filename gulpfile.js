'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('default', function() {
	return gulp.src('scss/global.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(rename('./main.css'))
	.pipe(gulp.dest('./css'))
})