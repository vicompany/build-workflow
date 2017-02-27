const path = require('path');

const gulp = require('gulp');
const merge = require('merge-stream');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const rename = require('gulp-rename');

// Script
const browserify = require('browserify');
const rollup = require('rollup-stream');
// Style
const autoprefixer = require('gulp-autoprefixer');
const minifyCss = require('gulp-cssnano');
const sass = require('gulp-sass');

const OPTIONS_ROLLUP = require('./rollup.config');

const DIR_SOURCE = 'Source';
const DIR_SOURCE_SCRIPTS = `${DIR_SOURCE}/scripts`;
const DIR_SOURCE_STYLES = `${DIR_SOURCE}/styles`;
const DIR_BUILD = 'wwwroot';


/****************************************************************
 * Browserify
 ****************************************************************/

gulp.task('browserify:build', () => {
  const files = [
    `${DIR_SOURCE_SCRIPTS}/app.js`,
    `${DIR_SOURCE_SCRIPTS}/other-bundle.js`
  ];

  const destinations = [
    'app.js',
    'other.js',
  ];

  const streams = files.map((entry, index) => {
    return browserify({ entries: entry })
      .transform('uglifyify', { global: true })
      .bundle()
      .pipe(source(destinations[index]))
      .pipe(gulp.dest(`${DIR_BUILD}/browserify-gulp`));
  });
  
  return merge.apply(null, streams);
});

gulp.task('browserify:watch', gulp.series('browserify:build', () => {
  gulp.watch(`${DIR_SOURCE_SCRIPTS}/**/*.js`, gulp.series('browserify:build'));
}));


/****************************************************************
 * Rollup
 ****************************************************************/

gulp.task('rollup:build', () => {
  const destination = path.join(DIR_BUILD, 'rollup-gulp');
  const streams = [];

  const bundles = {
    'app.js': 'Source/scripts/app.js',
    'other.js': 'Source/scripts/other-bundle.js',
  };

  Object.keys(bundles).forEach((bundle) => {
    const entry = bundles[bundle];
    const options = Object.assign({}, OPTIONS_ROLLUP, { entry });

    const stream = rollup(options)
      .pipe(source(bundle))
      .pipe(gulp.dest(destination));

    streams.push(stream);
  });
  
  return merge.apply(null, streams);
});


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

gulp.task('default', gulp.parallel('browserify:build', 'rollup:build', 'styles'));


