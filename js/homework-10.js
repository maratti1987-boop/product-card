import { productsList } from "./products.js";

const productTemplate = document.getElementById('product-template')
const productsContainer = document.querySelector('.products');

productsList.forEach(product => {
  const productClone = productTemplate.content.cloneNode(true);

  productClone.querySelector('.card__image').src = product.image; 
  productClone.querySelector('.card__image').alt = product.name;
  productClone.querySelector('.card__category').textContent = product.category;
  productClone.querySelector('.card__name').textContent = product.name;
  productClone.querySelector('.card__description').textContent = product.description;

  const compoundList = productClone.querySelector(".compound__list");
  product.compound.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    compoundList.appendChild(li);
  });

  productClone.querySelector('.card__price span').textContent = `${product.price} ₽`;

  productsContainer.appendChild(productClone);
});

// 4. Use a reduce method

const result = productsList.reduce((acc, product) => {
  acc.push({
    [product.name]: product.description
  });
  return acc;
}, []);

// 5. Prompt

function getCardsCount() {
  const count = prompt("Сколько карточек отобразить? От 1 до 5");

  if (count >= 1 && count <= 5) {
    return Number(count);
  } else {
    alert("Введите число от 1 до 5!");
    return getCardsCount(); // спрашиваем снова
  }
}

// 5. Render

function renderCards(products, count) {
  productsContainer.innerHTML = "";

  products.slice(0, count).forEach(product => {
    const productClone = productTemplate.content.cloneNode(true);

    productClone.querySelector('.card__image').src = product.image;
    productClone.querySelector('.card__image').alt = product.name;
    productClone.querySelector('.card__category').textContent = product.category;
    productClone.querySelector('.card__name').textContent = product.name;
    productClone.querySelector('.card__description').textContent = product.description;

    const compoundList = productClone.querySelector(".compound__list");
    product.compound.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      compoundList.appendChild(li);
    });

    productClone.querySelector('.card__price span').textContent = `${product.price} ₽`;

    productsContainer.appendChild(productClone);
  });
}

const count = getCardsCount();
renderCards(productsList, count);

