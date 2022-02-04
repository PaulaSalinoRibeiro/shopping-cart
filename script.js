let savedItemsOfCart = [];
const list = document.querySelector('.cart__items');
const itemsCart = JSON.parse(getSavedCartItems('cartItems'));

const cart = document.querySelector('.cart');
const p = document.createElement('p');
p.className = 'total-price';
cart.appendChild(p);

function removeAllItems() {
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
  const idDeleted = event.target.innerText.split(' ')[1];
  event.target.remove();
  const newSavedItemsOfCart = savedItemsOfCart.filter((item) => item.id !== idDeleted);
  savedItemsOfCart.splice(-1, 1);
  saveCartItems(JSON.stringify(savedItemsOfCart));
  const sum = newSavedItemsOfCart.reduce((acc, item) => acc + item.price, 0.00);
  p.innerText = `${parseFloat(sum.toFixed(2))}`;
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
   const addItem = await fetchItem(id);
   list.appendChild(createCartItemElement(addItem));
   savedItemsOfCart.push(addItem);
   saveCartItems(JSON.stringify(savedItemsOfCart));
   const sum = savedItemsOfCart.reduce((acc, item) => acc + item.price, 0.00);
   p.innerText = `${parseFloat(sum.toFixed(2))}`;
}

if (itemsCart) {
  savedItemsOfCart = itemsCart; // reatribui o array 
  itemsCart.forEach((item) => {
    list.appendChild(createCartItemElement(item));
  });
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ id: sku, title: name, thumbnail: image }) { // alias --> id: sku
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

window.onload = () => {};
