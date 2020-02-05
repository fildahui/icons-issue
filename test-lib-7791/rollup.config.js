import path from 'path';
import alias from '@rollup/plugin-alias';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import multiEntry from 'rollup-plugin-multi-entry';
import nodeResolve from 'rollup-plugin-node-resolve';

const dir = path.join(__dirname, 'dist/');

const babelOptions = {
   exclude: 'node_modules/**',
   presets: [
      [
         '@babel/preset-env',
         {
            modules: false
         }
      ]
   ]
};

const commonjsOptions = {
   include: ['./src/index.js', /node_modules/],
   'node_modules/react-is/index.js': ['isValidElementType']
};

export default {
   external: ['react', 'react-dom', 'prop-types'],
   input: ['./index.js'],
   output: {
      name: dir + 'index.js',
      format: 'umd',
      file: dir + 'index.js',
      globals: {
         react: 'React',
         'react-dom': 'ReactDOM',
         'prop-types': 'PropTypes'
      }
   },
   plugins: [
      alias({
         entries: {
            NodeModules: path.resolve(__dirname, 'node_modules/'),
            Components: path.resolve(__dirname, 'src/components/')
         }
      }),
      nodeResolve({
         extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
         customResolveOptions: {
            moduleDirectory: 'node_modules'
         },
         preferBuiltins: true,
         browser: true
      }),
      multiEntry(),
      commonjs(commonjsOptions),
      babel(babelOptions),
      json()
   ]
};
