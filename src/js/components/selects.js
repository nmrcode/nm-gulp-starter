import { Select } from "../vendors/custom-select";

const select = new Select("#select1", {
   placeholder: "Выберите элемент из списка", // placeholder
   // selectedId: "3", // объект по умолчанию
   arrow: true, // отображение стрелки (true or false)
   data: [
      // массив объектов для выбора
      { id: "1", value: "Объект 1" },
      { id: "2", value: "Объект 2" },
      { id: "3", value: "Объект 3" },
      { id: "4", value: "Объект 4" },
      { id: "5", value: "Объект 5" },
      { id: "6", value: "Объект 6" },
   ],

   onSelect(item) {
      // console.log("Выбранный объект", item); // Callback на выбранный объект
   },
});

window.s = select;
