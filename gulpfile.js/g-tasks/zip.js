const { src, dest } = require("gulp");

//Configuration
const path = require("../g-config/path");

//Плагины
const del = require("del")
const plumber = require("gulp-plumber")
const notify = require("gulp-notify")
const gulpZip = require("gulp-zip")


const zip = () => {
    del(`${path.root}/*.zip`);
    return src(`${path.zip.dest}/**/*.*`)
        .pipe(
            plumber(
                notify.onError({
                    title: "ZIP",
                    message: "Error: <%= error.message %>",
                })
            )
        )
        .pipe(gulpZip(`${path.root}.zip`))
        .pipe(dest(path.zip.dest));
}

module.exports = zip;