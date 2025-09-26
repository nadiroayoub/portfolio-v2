const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: "./src/app/index.js",
  },
  output: {
    assetModuleFilename: "images/[hash][ext][query]",
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
    clean: true,
  },
  mode: "development",
  devServer: {
    hot: true,
    watchFiles: ["src/**/*"],
  },
  module: {
    rules: [
      // ECMA2015 File
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env"] },
        },
      },
      // Sass css and scss files
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader, // OR 'style-loader'
          "css-loader",
          {
            loader: "sass-loader",
            options: { implementation: require("sass") },
          },
        ],
      },
      // Image files
      {
        type: "asset/resource",
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/public/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
};
