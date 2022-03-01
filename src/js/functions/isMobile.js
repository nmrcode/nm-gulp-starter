/*
Проверка на тип устройства
Документация:
Добавляет для html класс _touch-android\_touch-ios
*/
import vars from "../_vars";

(function mobileCheck() {
   const userAgent = navigator.userAgent || navigator.vendor || window.opera;

   if (/android/i.test(userAgent)) {
      vars.htmlEl.classList.add("_touch-android");
      return "Android";
   }

   if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      vars.htmlEl.classList.add("_touch-ios");
      return "iOS";
   }

   return "unknown";
})();
