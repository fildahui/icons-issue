module.exports = function(api) {
   const presets = ['@babel/preset-env', '@babel/preset-react'];

   const plugins = [
      [
         'module-resolver',
         {
            root: ['./src'],
            alias: {
               Components: './src/Components'
            }
         }
      ],
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
      ...(api.env('production') ? ['transform-react-remove-prop-types'] : [])
   ];

   return {
      presets,
      plugins
   };
};
