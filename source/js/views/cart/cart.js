import { createShoppingCartTemplate } from './markups/createShoppingCartTemplate';
import { renderElement } from '../utils';

class Cart {
  constructor(markups, utils) {
    this.createShoppingCartTemplate = markups.createShoppingCartTemplate;
    this.renderElement = utils.renderElement;
  }

  renderCart(cartData) {
    const cartList = document.querySelector(`.cart__list`);

    if (cartList) {
      cartData.forEach((item) => {
        this.renderElement(cartList, this.createShoppingCartTemplate(item));
      });
    }
  }
}

export const cart = new Cart(
  {
    createShoppingCartTemplate
  },
  {
    renderElement
  }
);
