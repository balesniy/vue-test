import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace'
import vue from 'rollup-plugin-vue';

export default {
  input:   'src/main.js',
  output:  {
    file:   'bundle.js',
    format: 'iife'
  },
  plugins: [
    resolve(), replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    }), vue()
  ]
};