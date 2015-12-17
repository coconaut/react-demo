"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); // run a local dev server
var open = require('gulp-open'); // open a url in a browser
var browserify = require('browserify'); // bundles js
var reactify = require('reactify'); // transforms react jsx to js
var source = require('vinyl-source-stream'); // use conventional text streams with gulp (as opposed to what browserify returns)
var concat = require('gulp-concat'); // concatenates files


//---------------------
//-- config helper --//
//---------------------
var config = {
    port: 9008,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
        images: './src/images/*',
        css: [
            './src/extra.css',
            './node_modules/material-design-lite/dist/material.blue_grey-pink.min.css',
            './node_modules/react-datepicker/dist/react-datepicker.min.css',
        ],
        dist: './dist',
        mainJs: './src/main.js'
    }
}


//------------------
//-- gulp tasks --//
//------------------
gulp.task('html', function() {
    // copy src html to dist
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist));
});

gulp.task('css', function() {
    // concat css and copy to dist
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));

});

gulp.task('js', function() {
    // browserify / bundle js and copy to dist
    browserify(config.paths.mainJs)
        .transform(reactify) // transpile jsx
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'));

});

gulp.task('images', function() {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'));

    // TODO: favicon
    // gulp.src('../src/favicon')
});

// start dev server
gulp.task('connect', function() {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true //turning off: this got annoying...
    });
});

gulp.task('reload', function() {
   connect.reload();
});

// opens a url
gulp.task('open', ['connect'], function() {
    gulp.src('dist/index.html')
        .pipe(open({uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('watch', function() {
   gulp.watch(config.paths.html,['html', 'reload']);
   gulp.watch(config.paths.js, ['js', 'reload']);
});


//------------------------
//-- main gulp runner --//
//------------------------
gulp.task('default', ['html', 'css', 'js', 'images', 'open', 'watch']);

