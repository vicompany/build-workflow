import babel from 'rollup-plugin-babel';
import commonJs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

export default {
  dest: 'wwwroot/bundle-rollup-npm.js',
  entry: 'Source/scripts/app.js',
  format: 'iife',
  globals: {
    app: 'app',
  },
  moduleName: 'app',
  plugins: [
    nodeResolve(),
    commonJs(),
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
