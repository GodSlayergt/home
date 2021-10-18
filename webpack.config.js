const HtmlWebpackPlugin = require("html-webpack-plugin");

const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

const deps = require("./package.json").dependencies;
module.exports = [
  {
    name:'microapp',
    entry: "./src/template",
    cache: false,

    mode: "development",
    devtool: "source-map",

    optimization: {
      minimize: false,
    },

    output: {
      publicPath: "http://localhost:5000/",
      library: "headerApp",
      libraryTarget: "umd",
    },

    resolve: {
      extensions: [".jsx", ".js", ".json"],
    },

    module: {
      rules: [
        {
          test: /\.m?js/,
          type: "javascript/auto",
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.jsx?$/,
          loader: require.resolve("babel-loader"),
          options: {
            presets: [require.resolve("@babel/preset-react")],
          },
        },
        {
          test: /\.md$/,
          loader: "raw-loader",
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new WebpackManifestPlugin(),
    ],
  },
  {
    name:'default',
    entry: "./src/index",
    cache: false,

    mode: "development",
    devtool: "source-map",

    optimization: {
      minimize: false,
    },

    output: {
      publicPath: "http://localhost:5000/",
    },

    resolve: {
      extensions: [".jsx", ".js", ".json"],
    },

    module: {
      rules: [
        {
          test: /\.m?js/,
          type: "javascript/auto",
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.jsx?$/,
          loader: require.resolve("babel-loader"),
          options: {
            presets: [require.resolve("@babel/preset-react")],
          },
        },
        {
          test: /\.md$/,
          loader: "raw-loader",
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new WebpackManifestPlugin(),
    ],
  },
];
