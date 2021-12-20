// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


const categoriesItem = document.querySelector("#categories");
console.log("Number of categorie", categoriesItem.children.length);
const arrItem = document.querySelectorAll(".item");
arrItem.forEach(itemNum => { 
    console.log("Category:", itemNum.firstElementChild.textContent);
    const lengthItemNum = itemNum.querySelectorAll("li");
    console.log("elements:", lengthItemNum.length
)})

