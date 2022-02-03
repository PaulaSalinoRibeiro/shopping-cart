const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  
  it('verifica se localStorage é chamado ao executar a funação saveCartItems', () => {
    saveCartItems();
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('verifica argumento do localStorage ao chamar a funcao saveCartItems', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>');
  });
  
});
