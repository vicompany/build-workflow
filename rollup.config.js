const babel = require('rollup-plugin-babel');
const commonJs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
const uglify = require('rollup-plugin-uglify');

module.exports = {
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
