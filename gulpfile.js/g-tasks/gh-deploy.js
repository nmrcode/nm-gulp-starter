const {src, dest} = require("gulp");

//Configuration
const path = require("../g-config/path");
const setting = require("../g-config/settings");

//Плагины
const ghPages = require('gulp-gh-pages');

const deploy = () => {
   return src('./app/**')
      .pipe(ghPages())
};

module.exports = deploy;
