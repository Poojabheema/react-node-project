module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,          // Applies to .js files
        use: {
          loader: '@sucrase/webpack-loader',  // Uses Sucrase
          options: {
            transforms: ['jsx']  // Only processes JSX (no TypeScript/Flow)
          }
        }
      }
    ]
  }
};
