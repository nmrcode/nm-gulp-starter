const { src, dest } = require("gulp");

//Configuration
const path = require("../g-config/path");
const setting = require("../g-config/settings");

//Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const autoprefixer = require("gulp-autoprefixer");
const sass = require("sass");
const gulpSass = require("gulp-sass");
const mainSass = gulpSass(sass);
const cleanCSS = require("gulp-clean-css");
const gulpIf = require("gulp-if");
const rename = require("gulp-rename");
const groupMedia = require("gulp-group-css-media-queries");
const minCSS = require("gulp-cssmin")

const scss = () => {
   return src(path.scss.src, { sourcemaps: setting.isDev })
      .pipe(
         plumber({
            errorHandler: notify.onError((error) => ({
               title: "SCSS",
               message: error.message,
            })),
         })
      )

      .pipe(mainSass())
      .pipe(gulpIf(setting.isProd, autoprefixer(setting.autoprefixer)))
      .pipe(gulpIf(setting.isProd, groupMedia()))
      .pipe(gulpIf(setting.isProd, cleanCSS(setting.cleancss)))
      .pipe(gulpIf(setting.isProd, minCSS()))
      .pipe(rename({ extname: ".min.css" }))
      .pipe(dest(path.scss.dest, { sourcemaps: setting.isDev }));
};

module.exports = scss;
