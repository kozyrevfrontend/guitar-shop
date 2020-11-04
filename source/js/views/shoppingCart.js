import { createShoppingCartValueTemplate } from './markups/createShoppingCartValueTemplate';
import { renderElement } from './utils';

class ShoppingCart {
  constructor(markups, utils) {
    this.createShoppingCartValueTemplate = markups.createShoppingCartValueTemplate;

    this.renderElement = utils.renderElement;
  }

  renderShoppingCartValue(value) {
    const shoppingCartLink = document.querySelector(`.user-menu__link--basket`);

    this.renderElement(shoppingCartLink, this.createShoppingCartValueTemplate(value));
  }

  removeShoppingCartValue() {
    const shoppingCartLink = document.querySelector(`.user-menu__link--basket`);
    const value = shoppingCartLink.querySelector(`.user-menu__value`);

    shoppingCartLink.removeChild(value);
  }
}

export const shoppingCart = new ShoppingCart(
  {
    createShoppingCartValueTemplate
  },
  {
    renderElement
  }
);
