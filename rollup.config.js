import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  dest: 'wwwroot/bundle-rollup.js',
  entry: 'Source/scripts/app.js',
  format: 'iife',
  globals: {
    app: 'app',
    moment: 'moment',
  },
  moduleName: 'app',
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: [
        ["latest", { es2015: { modules: false } }],
      ],
      plugins: ["external-helpers"]
    }),
    uglify(),
  ],
};
