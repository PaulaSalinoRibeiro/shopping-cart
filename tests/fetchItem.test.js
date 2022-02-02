require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  
  it('verifica se fetchItem é uma função', async () => {
    expect(typeof fetchItem).toBe('function');
  });

  it('verifica se a fetch é chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  it('verifica a url do fetch com o endpoint MLB1615760527', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527')
  });

  it('verifica se ao chamar a função fetchItem é igual ao objeto item', async () => {
    const response = await fetchItem('MLB1615760527');
    expect(response).toEqual(item);
  });

  it('verifica se chamar a função sem nenhum parametro retorna mensagem de erro', async () => {
    expect.assertions(1);
    try {
      const response = await fetchItem();
    } catch(error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
  });

});
