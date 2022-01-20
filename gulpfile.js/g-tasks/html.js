const { src, dest } = require("gulp");

//Configuration
const path = require("../g-config/path");
const setting = require("../g-config/settings");

//Плагины
const fileInclude = require("gulp-file-include")
const htmlMin = require("gulp-htmlmin")
const plumber = require("gulp-plumber")
const notify = require("gulp-notify")
const webpHtml = require("gulp-webp-html-nosvg")
const gulpIf = require("gulp-if");
const versionNumber = require("gulp-version-number")


const html = () => {
  return src(path.html.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "HTML",
        message: error.message,
      }))
    }))
    .pipe(fileInclude(setting.fileInclude))
    .pipe(gulpIf(setting.isProd, htmlMin(setting.htmlMin)))
    .pipe(webpHtml())
    .pipe(gulpIf(setting.isProd, versionNumber({
      value: "%DT%",
      append: {
        key: "_v",
        cover: 0,
        to: ["css", "js"],
      },
      output: {
        file: "gulpfile.js/version.json",
      },
    })))
    .pipe(dest(path.html.dest))
}

module.exports = html;
