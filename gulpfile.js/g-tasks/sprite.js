const { src, dest } = require("gulp");

//Configuration
const path = require("../g-config/path");
const setting = require("../g-config/settings");

const svgSprite = require("gulp-svg-sprite")
const svgmin = require("gulp-svgmin")
const cheerio = require("gulp-cheerio")
const replace = require("gulp-replace")
const plumber = require("gulp-plumber")
const notify = require("gulp-notify")



const svg = () => {
    return src(path.sprite.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "SVG",
                message: error.message,
            }))
        }))
        .pipe(svgmin(setting.svgmin))
        .pipe(cheerio(setting.cheerio))
        .pipe(replace("&gt;", ">"))
        .pipe(svgSprite(setting.svgSprite))
        .pipe(dest(path.sprite.dest));
};

module.exports = svg;
