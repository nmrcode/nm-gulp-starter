const { src, dest } = require("gulp");

//Configuration
const path = require("../g-config/path");
const setting = require("../g-config/settings");

//Плагины
const imagemin = require("gulp-imagemin");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const newer = require("gulp-newer");
const webp = require("gulp-webp");
const gulpIf = require("gulp-if");

const images = () => {
   return src(path.image.src)
      .pipe(
         plumber({
            errorHandler: notify.onError((error) => ({
               title: "IMG",
               message: error.message,
            })),
         })
      )
      .pipe(newer(path.image.dest))
      .pipe(webp())
      .pipe(dest(path.image.dest))
      .pipe(src(path.image.src))
      .pipe(newer(path.image.dest))
      .pipe(gulpIf(setting.isProd, imagemin(setting.imagemin)))
      .pipe(dest(path.image.dest))
      .pipe(src(path.image.svg))
      .pipe(dest(path.image.dest));
};

module.exports = images;
