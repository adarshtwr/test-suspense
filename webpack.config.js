const path = require("path");
const HWP = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  resolve: {
    extensions: [".js"]
  },
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    filename: "build.js",
    path: path.join(__dirname, "/dist"),
    publicPath: "/"
  },
  module: {
    rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader?sourceMap=true"]
        }
      ]
  },
  plugins: [
    new HWP({
      template: "./src/index.html"
    })
  ],
  devServer: {
    historyApiFallback: true,
    host: "localhost",
    port: "8000"
  }
};
