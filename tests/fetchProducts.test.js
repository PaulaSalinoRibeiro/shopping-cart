require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  
  it('fetchProducts é uma função', async () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it('verifica se fetch é chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('verifica o endpoint computador na função fetch', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  });

  it('verifica se chamar a função fetchProducts é igual ao objeto computadorSearch', async () => {
    const response = await fetchProducts('computador');
    expect(response).toEqual(computadorSearch);
  });

  it('verifica se retorna erro ao chamar a função fetchProducts sem nenhum parametro', async () => {
    expect.assertions(1);
    try {
      const response = await fetchProducts();
    } catch(error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
  });
  
});
