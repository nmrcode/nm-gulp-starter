/*
Позволяет определить текущую ширину экрана
Использование:
import { * } from "./functions/viewportCheck";
if (isMobile()) {
  //logic
}
*/

export const isMobile = () => {
   if (window.innerWidth < 768) {
      return true;
   }

   return false;
};

export const isTablet = () => {
   if (window.innerWidth >= 769 && window.innerWidth <= 1024) {
      return true;
   }

   return false;
};

export const isDesktop = () => {
   if (window.innerWidth > 1025) {
      return true;
   }

   return false;
};
