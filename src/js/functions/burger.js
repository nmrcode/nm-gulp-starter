(function () {
   const burger = document?.querySelector("[data-burger-btn]");
   const menu = document?.querySelector("[data-menu]");
   const body = document.body;

   burger?.addEventListener("click", (e) => {
      burger?.classList.toggle("burger--active");
      menu?.classList.toggle("menu--active");
      body?.classList.toggle("no-scroll");
   });
})();
