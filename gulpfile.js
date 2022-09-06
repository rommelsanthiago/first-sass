'use strict'

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

sass.compiler = require('node-sass');

gulp.task('default', watch);
gulp.task('sass', compileSass);

function compileSass() {
    return gulp
        .src('./Styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(function(f) {
            return (f.base + "/CSSFiles");
        }))
};

function watch() {
    gulp.watch('./Styles/*.scss', compileSass)
};
