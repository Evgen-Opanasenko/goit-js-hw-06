const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");
const elem = ingredients.map(ingredient => {
  const itemIng = document.createElement("li");
  itemIng.textcontent = ingredient;
  itemIng.classList.add("ingridient");
  return itemIng;
})
console.log(elem);

ingredientsEl.append(...elem)