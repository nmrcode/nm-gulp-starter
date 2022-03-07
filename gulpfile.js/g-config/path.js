const pathSrc = "./src";
const pathDest = "./app";

module.exports = {
   root: pathDest,

   html: {
      src: pathSrc + "/*.html",
      watch: pathSrc + "/**/*.html",
      dest: pathDest,
   },

   scss: {
      src: pathSrc + "/scss/*.scss",
      watch: pathSrc + "/scss/**/*.scss",
      dest: pathDest + "/css",
   },

   sprite: {
      src: pathSrc + "/img/sprites/*.svg",
      watch: pathSrc + "/img/sprites/*.svg",
      dest: pathDest + "/img/sprites",
   },

   zip: {
      src: pathSrc,
      dest: pathDest,
   },

   typograf: {
      locale: ["ru", "en-US"],
   },

   image: {
      src: pathSrc + "/img/**/*.{jpg,png,jpeg}",
      watch: pathSrc + "/img/**/*.{jpg,png,jpeg}",
      dest: pathDest + "/img",
      svg: pathSrc + "/img/*.svg",
   },

   font: {
      src: pathSrc + "/resources/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
      watch:
         pathSrc + "/resources/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
      dest: pathDest + "/resources/fonts",
      srcTTF: pathSrc + "/resources/fonts/*.ttf",
   },

   js: {
      src: pathSrc + "/js/*.js",
      watch: pathSrc + "/js/**/*.js",
      dest: pathDest + "/js",
   },

   copy: {
      src: pathSrc + "/resources/*.*",
      watch: pathSrc + "/resources/*.*",
      dest: pathDest + "/resources",
   },
};
