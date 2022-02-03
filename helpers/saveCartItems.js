const saveCartItems = (Item) => {
  const savedCart = localStorage.setItem('cartItems', Item);
  return savedCart;
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
