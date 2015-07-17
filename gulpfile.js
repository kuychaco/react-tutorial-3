var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var htmlreplace = require('gulp-html-replace');

var path = {
  HTML: 'public/src/index.html',
  ALL: ['public/src/js/*.js', 'public/src/js/**/*.js', 'public/src/index.html'],
  JS: ['public/src/js/*.js', 'public/src/js/**/*.js'],
  MINIFIED_OUT: 'build.min.js',
  DEST_SRC: 'public/dist/src',
  DEST_BUILD: 'public/dist/build',
  DEST: 'public/dist'
};

gulp.task('transform', function() {
  gulp.src(path.JS)
    .pipe(react())
    .pipe(gulp.dest(path.DEST_SRC));
});

gulp.task('copy', function() {
  gulp.src(path.HTML)
    .pipe(gulp.dest(path.DEST));
});

gulp.task('watch', function() {
  gulp.watch(path.ALL, ['transform', 'copy']);
});

gulp.task('default', ['watch']);