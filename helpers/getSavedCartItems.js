const getSavedCartItems = (key) => {
  const getItems = (localStorage.getItem(key));
  return getItems;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
