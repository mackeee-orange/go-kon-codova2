var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');


gulp.task('browserify', function(){
  browserify('./www/jsx/app.jsx', {debug:true})
    .transform(babelify)
    .bundle()
    .on('error', function(error){console.log("Error:"+error.message);})
    .pipe(source('app.js'))
    .pipe(gulp.dest('./www/js/'));
});