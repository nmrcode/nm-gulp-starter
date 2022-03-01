/*
Тултипы Tippy
Документация:
https://atomiks.github.io/tippyjs/
Сниппет: n-swiper
Не забыть подключить стили в scss/vendors.scss
*/
import tippy from "tippy.js";

if ((document.querySelector = "#block")) {
   tippy("#block", {
      content: "I'm a Tippy tooltip!", // Здесь текст подсказки
      placement: "top", // Расположение
      arrow: true, // Стрелка
   });
}
