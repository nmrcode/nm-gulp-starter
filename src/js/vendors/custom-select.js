const getTemplate = (data, placeholder, arrow, selectedId) => {
   let title = placeholder ?? "Дефолтный placeholder";
   const arrowStyle = arrow === false ? "hidden" : "visible";
   const items = data.map((item) => {
      let cls = "";
      if (item.id === selectedId) {
         title = item.value;
         cls = "selected";
      }
      return `<li class="select__item ${cls}" data-type="select-item" data-id="${item.id}">${item.value}</li>`;
   });

   return `
  <div class="select__backdrop" data-type="select-backdrop"></div>
  <div class="select__input" data-type="select-input">
  <span class="select__title" data-type="select-title">${title}</span>
  <div class="select__arrow ${arrowStyle}" data-type="select-arrow"></div>
  </div>
  <div class="select__dropdown">
    <ul class="select__list">
      ${items.join("")}
    </ul>
  </div>
`;
};

export class Select {
   constructor(selector, options) {
      this.element = document.querySelector(selector);
      this.options = options;
      this.selectedId = options.selectedId;
      this.#render();
      this.#setup();
   }

   #setup() {
      this.clickHandler = this.clickHandler.bind(this);
      this.element.addEventListener("click", this.clickHandler);
      this.inputArrow = this.element.querySelector(
         '[data-type="select-arrow"]'
      );
      this.title = this.element.querySelector('[data-type="select-title"]');
   }

   #render() {
      const { placeholder, arrow, data } = this.options;
      this.element.classList.add("select");
      this.element.innerHTML = getTemplate(
         data,
         placeholder,
         arrow,
         this.selectedId
      );
   }

   clickHandler(event) {
      const { type } = event.target.dataset;
      if (
         type === "select-input" ||
         type === "select-title" ||
         type === "select-arrow"
      ) {
         this.toggle();
      } else if (type === "select-item") {
         const id = event.target.dataset.id;
         this.select(id);
      } else if (type === "select-backdrop") {
         this.close();
      }
   }

   get isOpen() {
      return this.element.classList.contains("open");
   }

   get current() {
      return this.options.data.find((item) => item.id === this.selectedId);
   }

   select(id) {
      this.selectedId = id;
      this.title.textContent = this.current.value;
      this.close();
      this.element
         .querySelectorAll('[data-type="select-item"')
         .forEach((el) => {
            el.classList.remove("selected");
         });
      this.element.querySelector(`[data-id="${id}"]`).classList.add("selected");
      this.options.onSelect ? this.options.onSelect(this.current) : null;
   }

   toggle() {
      this.isOpen ? this.close() : this.open();
   }

   open() {
      this.element.classList.add("open");
   }

   close() {
      this.element.classList.remove("open");
   }

   destroy() {
      this.element.removeEventListener("click", this.clickHandler);
      this.element.innerHTML = "";
   }
}
