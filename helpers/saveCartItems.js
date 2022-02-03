const saveCartItems = (Item) => {
  const savedCart = JSON.stringify(localStorage.setItem('cartItems', Item));
  return savedCart;
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
