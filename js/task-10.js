function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  inputVal: document.querySelector("input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxesDiv: document.querySelector("#boxes"),
};
console.log(refs.inputVal.value);
console.log(refs.inputVal);
console.log(refs.createBtn);
console.log(refs.destroyBtn);
console.log(refs.boxesDiv);

let boxQuantity = 0;

refs.inputVal.addEventListener("input", (e) => {
  boxQuantity = refs.inputVal.value;
  console.log(boxQuantity);
  return boxQuantity;
});

refs.createBtn.addEventListener("click", onCreateBoxes);

function onCreateBoxes() {
  let stringAll = ``;
  console.log(stringAll);
  console.log(boxQuantity);
  for (let i = 1; i <= boxQuantity; i += 1) {
    stringAll += `<div style="background-color:${getRandomHexColor()}; width:${
      20 + i * 10
    }px; height:${20 + i * 10}px"></div>`;
  }
  console.log(stringAll);
  refs.boxesDiv.innerHTML = stringAll;
}

refs.destroyBtn.addEventListener("click", () => {
  refs.boxesDiv.innerHTML = "";
});
