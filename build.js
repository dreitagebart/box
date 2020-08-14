const path = require("path")

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: {
    box: "./src/index.ts",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    library: "Box",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  externals: {
    react: {
      root: "React",
      amd: "react",
      commonjs2: "react",
      commonjs: "react",
    },
  },
}
