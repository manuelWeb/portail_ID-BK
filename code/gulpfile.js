'use strict';

var gulp        = require('gulp'),
    slim        = require("gulp-slim"),
    sass        = require('gulp-sass'),
    cssmin      = require('gulp-cssmin'),
    rename      = require('gulp-rename'),
    prefix      = require('gulp-autoprefixer'),
    uglify      = require('gulp-uglify'),
    concat      = require('gulp-concat'),
    imagemin    = require('gulp-imagemin'),
    rimraf      = require('rimraf'),
    browserSync = require('browser-sync').create();
// delete old folder before start dev task
gulp.task('default', function (cb) {
  rimraf('./dist', function cb () {
    console.log('dist is destroyed : clean is over!\nlet\'s work on clean folder!');
    gulp.start('gulp1');
  });
});
// Static Server + watching scss/html files
gulp.task('serve', ['slim', 'sass', 'json', 'js', 'images' ], function() {

    browserSync.init({
        server: 'dist/'
    });
    gulp.watch('src/*.slim', ['slim']);
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/js/**/*.json', ['json']);
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('src/img/**/*.+(png|jpg|gif|svg)', ['images']);
    gulp.watch('dist/*.html').on('change', browserSync.reload);
});
// Config slim task
gulp.task('slim', function () {
  return gulp.src(['src/index.slim'])
    .pipe(slim( {pretty: true, indent: '2' })) // {read:false},
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.stream());
});

// Configure CSS tasks.
gulp.task('sass', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(prefix('last 2 versions'))
    // .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

// Configure JS.
gulp.task('js', function() {
  return gulp.src(['src/js/**/*.js'])
    // .pipe(uglify())
    .pipe(concat('app.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
});
gulp.task('json', function() {
  return gulp.src(['src/js/**/*.json'])
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
});

// Configure image stuff.
gulp.task('images', function () {
  return gulp.src('src/img/**/*.+(png|jpg|gif|svg)')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function () {
  gulp.watch('src/*.slim', ['slim']);
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch('src/js/**/*.json', ['json']);
  gulp.watch('src/img/**/*.+(png|jpg|gif|svg)', ['images']);
  gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('gulp1', ['slim', 'sass', 'json', 'js', 'images', 'serve']);
