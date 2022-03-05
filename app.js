window.onload = () => {
  addButton();
  addEventFocus();
};

//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

const addButton = () => {
  let elements = document.getElementsByClassName("click");

  for (const element of elements) {
    let button = document.createElement("button");
    button.type = "button";
    button.textContent = "Tócame";
    button.id = "btnToClick";
    element.insertAdjacentElement("beforebegin", button);
    button.addEventListener("click", pressMe);
    function pressMe() {
      console.log(element);
    }
  }
};

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const addEventFocus = () => {
  let elements = document.getElementsByClassName("focus");

  for (var element of elements) {
    element.addEventListener("focus", addFocus);

    function addFocus() {
      console.log("haz pulsado el input focus");
    }
  }
};

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */

let inputValue = document.querySelector(".value");

inputValue.addEventListener("input", inputEvent);

function inputEvent() {
  let inputText = inputValue.value;
  console.log(inputText);
}
