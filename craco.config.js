const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Find the rules array in the webpack configuration
      const rules = webpackConfig.module.rules;

      // Add the new rule for HTML files
      rules.push({
        test: /\.html$/i,
        loader: 'html-loader',
      });

      // Add the HtmlWebpackPlugin as a plugin
      webpackConfig.plugins.push(
        new HtmlWebpackPlugin({
          template: paths.appHtml,
        })
      );

      return webpackConfig;
    },
  },
};