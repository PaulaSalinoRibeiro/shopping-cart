const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {

  it('verifica se localStorage.getItem é chamada', () => {
    getSavedCartItems('cartItems');
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it('verifica o argumento passado para localStorage.getItem', () => {
    getSavedCartItems('cartItems');
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });

});
