'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const babelify = require('babelify');
const reactify = require('reactify');


gulp.task('browserify', function(){
  browserify('./www/jsx/app.jsx', {
    entry:true,
    extentions:[
      'jsx',
      'json',
      'js',
      'es6'
    ],
    debug:true
  })
    .transform(babelify, {"presets": [ "react", "es2015" ] })
    .bundle()
    .on('error', function(error){
      console.log("Error:"+error.message);
      console.log("ES:"+error.stack);
    })
    .pipe(source('app.js'))
    .pipe(gulp.dest('./www/js/'));
});