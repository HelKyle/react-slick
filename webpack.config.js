var webpack = require("webpack");
var path = require("path");
var autoprefixer = require("autoprefixer");

module.exports = {
  devtool: "#inline-source-map",
  entry: {
    vendor: ["react", "react-dom"],
    docs: [
      "./docs/index.jsx"
      // 'webpack/hot/only-dev-server',
      // 'webpack-dev-server/client?http://localhost:8000'
    ]
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].js"
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loaders: ["babel"] },
      { test: /\.js$/, loaders: ["babel"], exclude: /node_modules/ },
      {
        test: /\.scss$/,
        loader:
          "style!css!sass?outputStyle=expanded&" +
          "includePaths[]=" +
          path.resolve(__dirname, "./node_modules")
      },
      { test: /\.md$/, loader: "html!markdown" }
    ]
  },
  postcss: [autoprefixer({ browsers: ["last 2 version"] })],
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity
    }),
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.IgnorePlugin(/vertx/)
  ]
};
