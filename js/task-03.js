const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector("ul.gallery");

const imagesEl = images => {
  return images.map(({ url, alt }) => { 
    const indexString = `<li class="item-img"><img src=${url} alt=${alt} width "300" height="250"></li>`;
    return indexString
  })
}
const li = imagesEl(images).join("");
console.log(li);
galleryEl.insertAdjacentHTML("beforeend", li)

galleryEl.style.display = "flex";
galleryEl.style.justifyContent = "space-between";
console.log(galleryEl)