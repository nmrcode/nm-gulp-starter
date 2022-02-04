// Обработа медиа запросов из атрибутов
export function dataMediaQueries(array, dataSetValue) {
   // Получение объектов с медиа запросами
   const media = Array.from(array).filter(function (item, index, self) {
      if (item.dataset[dataSetValue]) {
         return item.dataset[dataSetValue].split(",")[0];
      }
   });
   // Инициализация объектов с медиа запросами
   if (media.length) {
      const breakpointsArray = [];
      media.forEach((item) => {
         const params = item.dataset[dataSetValue];
         const breakpoint = {};
         const paramsArray = params.split(",");
         breakpoint.value = paramsArray[0];
         breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
         breakpoint.item = item;
         breakpointsArray.push(breakpoint);
      });
      // Получаем уникальные брейкпоинты
      let mdQueries = breakpointsArray.map(function (item) {
         return (
            "(" +
            item.type +
            "-width: " +
            item.value +
            "px)," +
            item.value +
            "," +
            item.type
         );
      });
      mdQueries = uniqArray(mdQueries);
      const mdQueriesArray = [];

      if (mdQueries.length) {
         // Работаем с каждым брейкпоинтом
         mdQueries.forEach((breakpoint) => {
            const paramsArray = breakpoint.split(",");
            const mediaBreakpoint = paramsArray[1];
            const mediaType = paramsArray[2];
            const matchMedia = window.matchMedia(paramsArray[0]);
            // Объекты с нужными условиями
            const itemsArray = breakpointsArray.filter(function (item) {
               if (item.value === mediaBreakpoint && item.type === mediaType) {
                  return true;
               }
            });
            mdQueriesArray.push({
               itemsArray,
               matchMedia,
            });
         });
         return mdQueriesArray;
      }
   }
}
// Вспомогательные модули плавного расскрытия и закрытия объекта
export let _slideUp = (target, duration = 500, showmore = 0) => {
   if (!target.classList.contains("_slide")) {
      target.classList.add("_slide");
      target.style.transitionProperty = "height, margin, padding";
      target.style.transitionDuration = duration + "ms";
      target.style.height = `${target.offsetHeight}px`;
      target.offsetHeight;
      target.style.overflow = "hidden";
      target.style.height = showmore ? `${showmore}px` : `0px`;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      window.setTimeout(() => {
         target.hidden = !showmore ? true : false;
         !showmore ? target.style.removeProperty("height") : null;
         target.style.removeProperty("padding-top");
         target.style.removeProperty("padding-bottom");
         target.style.removeProperty("margin-top");
         target.style.removeProperty("margin-bottom");
         !showmore ? target.style.removeProperty("overflow") : null;
         target.style.removeProperty("transition-duration");
         target.style.removeProperty("transition-property");
         target.classList.remove("_slide");
         // Создаем событие
         document.dispatchEvent(
            new CustomEvent("slideUpDone", {
               detail: {
                  target: target,
               },
            })
         );
      }, duration);
   }
};
export let _slideDown = (target, duration = 500, showmore = 0) => {
   if (!target.classList.contains("_slide")) {
      target.classList.add("_slide");
      target.hidden = target.hidden ? false : null;
      showmore ? target.style.removeProperty("height") : null;
      let height = target.offsetHeight;
      target.style.overflow = "hidden";
      target.style.height = showmore ? `${showmore}px` : `0px`;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      target.offsetHeight;
      target.style.transitionProperty = "height, margin, padding";
      target.style.transitionDuration = duration + "ms";
      target.style.height = height + "px";
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");
      window.setTimeout(() => {
         target.style.removeProperty("height");
         target.style.removeProperty("overflow");
         target.style.removeProperty("transition-duration");
         target.style.removeProperty("transition-property");
         target.classList.remove("_slide");
         // Создаем событие
         document.dispatchEvent(
            new CustomEvent("slideDownDone", {
               detail: {
                  target: target,
               },
            })
         );
      }, duration);
   }
};
export let _slideToggle = (target, duration = 500) => {
   if (target.hidden) {
      return _slideDown(target, duration);
   } else {
      return _slideUp(target, duration);
   }
};

// Проверка мобильного браузера
export let isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows()
      );
   },
};
/* Добавление класса touch для HTML если браузер мобильный */
export function addTouchClass() {
   // Добавление класса _touch для HTML если браузер мобильный
   if (isMobile.any()) document.documentElement.classList.add("touch");
}
// Добавление loaded для HTML после полной загрузки страницы
export function addLoadedClass() {
   window.addEventListener("load", function () {
      setTimeout(function () {
         document.documentElement.classList.add("loaded");
      }, 0);
   });
}
