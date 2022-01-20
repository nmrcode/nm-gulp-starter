const { src, dest } = require("gulp");

//Configuration
const path = require("../g-config/path");
const setting = require("../g-config/settings");

//Плагины
const plumber = require("gulp-plumber")
const notify = require("gulp-notify")
const babel = require("gulp-babel")
const webpack = require("webpack-stream")


const js = () => {
  return src(path.js.src, { sourcemaps: setting.isDev })
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "JS",
        message: error.message,
      }))
    }))
    .pipe(babel())
    .pipe(webpack(setting.webpack))
    .pipe(dest(path.js.dest, { sourcemaps: setting.isDev }))
}

module.exports = js;
