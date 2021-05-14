const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts", ".scss"],
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.s[ac]ss$/i,
        loader: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
};
