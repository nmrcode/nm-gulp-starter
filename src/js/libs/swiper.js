/*
Слайдер Swiper
Документация:
https://swiperjs.com/swiper-api
Сниппет: n-swiper
Не забыть подключить стили в scss/vendors.scss
*/
import Swiper, { Navigation } from "swiper";

// Инициализация слайдеров
function initSliders() {
   // Проверяем, есть ли слайдер на стронице
   if (document.querySelector(".swiper")) {
      // Создаем слайдер
      new Swiper(".swiper", {
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [Navigation],
         observer: true,
         observeParents: true,
         slidesPerView: 1,
         spaceBetween: 0,
         autoHeight: true,
         speed: 800,

         //touchRatio: 0,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,

         /*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

         // Пагинация
         /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

         // Скроллбар
         /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

         // Кнопки "влево/вправо"
         navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
         },

         // Брейкпоинты
         /*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
         // События
         on: {},
      });
   }
}

window.addEventListener("load", function (e) {
   // Запуск инициализации слайдеров
   initSliders();
});
