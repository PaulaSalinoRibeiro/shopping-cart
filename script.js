// const { fetchProducts } = require("./helpers/fetchProducts");

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ id: sku, title: name, thumbnail: image }) { // alias
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  return section;
}

const createdProductsList = async () => {
  const section = document.querySelector('.items');
  const arrayOfProducts = await fetchProducts('computador');
  arrayOfProducts.results.forEach((product) => {
    section.appendChild(createProductItemElement(product));
  });
};

createdProductsList();

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  // 
}

function createCartItemElement({ id: sku, title: name, price: salePrice }) { 
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const createdItems = async () => {
  const listOfItems = document.querySelector('.cart__items');
  // const allProducts = await fetchProducts('computador');
  // const ids = allProducts.results.map((product) => product.id);
  const item = await fetchItem('MLB1341706310'); 
  listOfItems.appendChild(createCartItemElement(item));
};

createdItems();

window.onload = () => { };
