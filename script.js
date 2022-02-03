// const { fetchProducts } = require("./helpers/fetchProducts");

function removeAllItems() {
  const list = document.querySelector('.cart__items');
  const items = document.querySelectorAll('.cart__item');
  items.forEach((item) => {
    list.removeChild(item);
  });
}

const emptyCart = document.querySelector('.empty-cart');
emptyCart.addEventListener('click', removeAllItems);

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function cartItemClickListener(event) {
  event.target.remove();
}

function createCartItemElement({ id: sku, title: name, price: salePrice }) { 
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

 async function addItemToCart(event) {
   const id = event.target.parentNode.children[0].innerText;
   // const img = event.target.parentNode.children[2].src;
   const addItem = await fetchItem(id);
   const list = document.querySelector('.cart__items');
   list.appendChild(createCartItemElement(addItem));
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
  const button = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  button.addEventListener('click', addItemToCart);
  section.appendChild(button);
  return section;
}

async function createdProductsList() {
  const section = document.querySelector('.items');
  const arrayOfProducts = await fetchProducts('computador');
  arrayOfProducts.results.forEach((product) => {
    section.appendChild(createProductItemElement(product));
  });
}
createdProductsList();

/* function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
} */

window.onload = () => { };
