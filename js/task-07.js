const inputEl = document.querySelector("#font-size-control");
console.log(inputEl.value);
const textInput = document.querySelector("#text");
inputEl.addEventListener("input", onInputChange);
function onInputChange(event) {
textInput.style.fontSize = inputEl.value + "px"
}
textInput.style.fontSize = inputEl.value + "px"