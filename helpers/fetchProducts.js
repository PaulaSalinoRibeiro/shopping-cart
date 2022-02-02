const fetchProducts = async ($QUERY) => {
  const END_POINT = `https://api.mercadolibre.com/sites/MLB/search?q=${$QUERY}`;
  const response = await fetch(END_POINT);
  const produts = await response.json();
  console.log(produts.results); //
  return produts.results;
};

// fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}