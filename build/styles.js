(function () {
  'use strict';

  var gulp = require('gulp');
  var autoprefixer = require('autoprefixer');
  var sass = require('gulp-dart-sass');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', '@jswork/gulp-*'],
  });

  //styles
  gulp.task('styles', function () {
    return gulp
      .src('src/*.scss')
      .pipe($.jswork.pkgHeader())
      .pipe(gulp.dest('dist'))
      .pipe(sass().on('error', sass.logError))
      .pipe($.postcss([autoprefixer()]))
      .pipe($.rename('style.css'))
      .pipe(gulp.dest('dist'));
  });
})();
