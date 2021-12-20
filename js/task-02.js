const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");
const elem = ingredients.map(el => {
  const itemEl = document.createElement("li");
  itemEl.textcontent = el;
  itemEl.classList.add("ingridient");
  return itemEl;
})
console.log(elem);
ingredientsEl.append(...elem)