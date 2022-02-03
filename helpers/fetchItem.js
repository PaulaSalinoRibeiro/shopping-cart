const fetchItem = async ($ItemID) => {
  const END_POINT = `https://api.mercadolibre.com/items/${$ItemID}`;
  const response = await fetch(END_POINT);
  const datas = await response.json();
  // console.log(datas);
  return datas;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
