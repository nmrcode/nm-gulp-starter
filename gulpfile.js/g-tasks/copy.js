const { src, dest } = require("gulp");

//Configuration
const path = require("../g-config/path");
const setting = require("../g-config/settings");

//Плагины

const copy = () => {
   return src(path.copy.src).pipe(dest(path.copy.dest));
};

module.exports = copy;
