const {watch, series, parallel} = require("gulp");

//Пути
const path = require("./g-config/path");

//Таски
const browserSync = require("browser-sync").create();
const clear = require("./g-tasks/clear");
const html = require("./g-tasks/html");
const scss = require("./g-tasks/scss");
const sprite = require("./g-tasks/sprite");
const zip = require("./g-tasks/zip");
const images = require("./g-tasks/image");
const fonts = require("./g-tasks/font");
const js = require("./g-tasks/js");
const copy = require("./g-tasks/copy");
const deploy = require("../../../_Templates/nm-gulp-starter/gulpfile.js/g-tasks/gh-deploy");

//Сервер
const server = () => {
   browserSync.init({
      server: {
         baseDir: path.root,
      },
      open: false,
   });
};

//Наблюдатель
const watcher = () => {
   watch(path.html.watch, html).on("all", browserSync.reload);
   watch(path.scss.watch, scss).on("all", browserSync.reload);
   watch(path.sprite.watch, sprite).on("all", browserSync.reload);
   watch(path.image.watch, images).on("all", browserSync.reload);
   watch(path.font.watch, fonts).on("all", browserSync.reload);
   watch(path.js.watch, js).on("all", browserSync.reload);
};

//Задачи
exports.scss = scss;
exports.html = html;
exports.sprite = sprite;
exports.zip = zip;
exports.images = images;
exports.fonts = fonts;
exports.js = js;
exports.copy = copy;
exports.deploy = deploy;

const build = series(
   clear,
   parallel(html, scss, sprite, images, fonts, js, copy)
);
const dev = series(build, parallel(watcher, server));

//Сборки
exports.clear = clear; // Удаление папки продакшена
exports.dev = dev; //Разработка
exports.build = build; //Сборка
exports.zip = series(build, zip); //Архивация
exports.deploy = deploy; //Архивация
