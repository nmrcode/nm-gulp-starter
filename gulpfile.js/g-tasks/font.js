const { src, dest } = require("gulp");

//Configuration
const path = require("../g-config/path");
const setting = require("../g-config/settings");

//Плагины
const plumber = require("gulp-plumber")
const notify = require("gulp-notify")
const newer = require("gulp-newer")
const fonter = require("gulp-fonter")
const ttf2woff2 = require("gulp-ttf2woff2")




const font = () => {
  return src(path.font.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "FONT",
        message: error.message,
      }))
    }))

    .pipe(newer(path.font.dest))
    .pipe(fonter(setting.fonter))
    .pipe(dest(path.font.dest))
    .pipe(src(path.font.srcTTF))
    .pipe(ttf2woff2())
    .pipe(dest(path.font.dest))
};

module.exports = font;
