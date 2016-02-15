var
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  cssnano = require('gulp-cssnano'),
  rename = require('gulp-rename'),
  imagemin = require('gulp-imagemin'),
  notify = require('gulp-notify'),
  config = {
    srcCss: 'src/scss/*.scss',
    buildCss: 'build/css',
    srcImg: 'src/img/*',
    buildImg: 'build/img'
  }

gulp.task('build-css', function (cb) {
  gulp.src(config.srcCss)
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest(config.buildCss))
  cb()
})
gulp.task('images', function() {
  gulp.src(config.srcImg)
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest(config.buildImg))
    .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('watch', function (cb) {
  gulp.watch(config.srcCss, ['build-css'])
})

gulp.task('default', ['build-css', 'watch'])

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');