const isProd = process.argv.includes("--prod")
const isDev = !isProd
module.exports = {

  isProd: isProd,
  isDev: isDev,

  fileinclude: {
    prefix: "@@",
    basepath: "@file",
  },

  htmlMin: {
    collapseWhitespace: isProd,
  },

  autoprefixer: {
    cascade: false,
    grid: true,
    overrideBrowserslist: ["last 5 versions"],
  },

  cleancss: {
    level: 2,
  },

  cheerio: {
    run: function ($) {
      $("[fill]").removeAttr("fill");
      $("[stroke]").removeAttr("stroke");
      $("[style]").removeAttr("style");
    },
    parserOptions: {
      xmlMode: true,
    },
  },

  svgSprite: {
    mode: {
      stack: {
        sprite: "../sprite.svg",
      },
    },
  },

  svgmin: {
    js2svg: {
      pretty: true,
    },
  },

  imagemin: {
    verbose: true,
  },

  fonter: {
    formats: ["woff"]
  },

  webpack: {
    mode: isProd ? "production" : "development",
    output: {
      filename: "main.js",
    },
    module: {
      rules: [{
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: "defaults",
                },
              ],
            ],
          },
        },
      },],
    },
    devtool: !isProd ? "source-map" : false,
  },
}
