export default {
  entry: 'Source/scripts/app.js',
  format: 'iife',
  dest: 'wwwroot/bundle-rollup.js',
  moduleName: 'app',
  globals: {
    app: 'app',
  },
};
