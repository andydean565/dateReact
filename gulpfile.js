var gulp = require('gulp'), minify = require('gulp-minify'), watch = require('gulp-watch'), concat = require('gulp-concat'), gulp_remove_logging = require("gulp-remove-logging");

var jsLoc = './src/js/';

gulp.task('compilejs', function () {
   return gulp.src(jsLoc + 'dateReact-debug.js')
   .pipe(gulp_remove_logging({}))
   .pipe(concat('dateReact.js'))   
   .pipe(minify({ ext:{src:'.js', min:'.min.js'}}))
   .pipe(gulp.dest(jsLoc))
});

gulp.task('js_watch', function () {
    gulp.watch(jsLoc + 'dateReact-debug.js', ['compilejs']);
});

gulp.task('default', ['compilejs', 'js_watch']);
  