const gulp = require('gulp');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const rename = require('gulp-rename');

// Script
const browserify = require('browserify');
// Style
const autoprefixer = require('gulp-autoprefixer');
const minifyCss = require('gulp-cssnano');
const sass = require('gulp-sass');

const DIR_SOURCE = 'Source';
const DIR_SOURCE_SCRIPTS = `${DIR_SOURCE}/scripts`;
const DIR_SOURCE_STYLES = `${DIR_SOURCE}/styles`;
const DIR_BUILD = 'wwwroot';


/****************************************************************
 * Browserify
 ****************************************************************/

gulp.task('browserify:build', () => {
  const b = browserify({
    entries: `${DIR_SOURCE_SCRIPTS}/app-browserify.js`,
  })
  .transform('uglifyify', { global: true });

  return b.bundle()
    .pipe(source('bundle-browserify-gulp.js'))
    .pipe(buffer())
    .pipe(gulp.dest(DIR_BUILD));
});

gulp.task('browserify:watch', gulp.series('browserify:build', () => {
  gulp.watch(`${DIR_SOURCE_SCRIPTS}/**/*.js`, gulp.series('browserify:build'));
}));


/****************************************************************
 * Miscellaneous
 ****************************************************************/

gulp.task('styles', () => {
  return gulp.src(`${DIR_SOURCE_STYLES}/**/*.scss`)
    .pipe(sass())
    .pipe(minifyCss())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
    }))
    .pipe(rename('style-gulp.css'))
    .pipe(gulp.dest(DIR_BUILD));
});

gulp.task('default', gulp.parallel('browserify:build', 'styles'));


