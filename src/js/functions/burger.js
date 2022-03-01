/*
Бургер
Документация:
Для бургера надо добавить атрибут data-burger
При нажатии добавляет себе класс _active
Для меню добавить атрибут data-menu
При нажатии добавляет класс _open
Стили хранятся в миксине scss/mixins/_burger
Сниппет бургера: n-burg
Сниппет меню: n-nav
*/
import vars from "../_vars";
(function burger() {
   const burger = document.querySelector("[data-burger]");
   const menu = document.querySelector("[data-menu]");
   if (burger && menu) {
      burger.addEventListener("click", (e) => {
         burger.classList.toggle("_active");
         menu.classList.toggle("_open");
         vars.bodyEl.classList.toggle("_no-scroll");
      });
   }
})();
