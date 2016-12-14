const gulp = require('gulp');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');

const browserify = require('browserify');
const babelify = require('babelify');

const DIR_SOURCE = 'Source';
const DIR_SOURCE_SCRIPTS = `${DIR_SOURCE}/scripts`;
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
 * Generic
 ****************************************************************/

gulp.task('default', gulp.parallel('browserify:build'));


