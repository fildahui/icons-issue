import path from 'path';
import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';

const dir = path.join(__dirname, 'dist/');

const babelOptions = {
   exclude: 'node_modules/**',
   presets: [
      [
         '@babel/preset-env',
         {
            modules: false
         }
      ],
      '@babel/preset-react'
   ]
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
      resolve({
         extensions: ['.js', '.jsx', '.json', '.css', '.scss']
      }),
      babel(babelOptions)
   ]
};
