import { createShoppingCartTemplate } from './markups/createShoppingCartTemplate';
import { createShoppingCartCountTemplate } from './markups/createShoppingCartCountTemplate';
import { createCartTotalPriceTemplate } from './markups/createCartFinalPriceTemplate';
import { renderElement } from '../utils';
import { deleteChildrenElements } from '../utils';

class Cart {
  constructor(markups, utils) {
    this.createShoppingCartTemplate = markups.createShoppingCartTemplate;
    this.createShoppingCartCountTemplate = markups.createShoppingCartCountTemplate;
    this.createCartTotalPriceTemplate = markups.createCartTotalPriceTemplate;
    this.renderElement = utils.renderElement;
    this.deleteChildrenElements = utils.deleteChildrenElements;
  }

  renderCart(cartData, decreaseClickHandler, increaseClickHandler, deleteClickHandler) {
    const cartList = document.querySelector(`.cart__list`);

    if (cartList) {
      this.deleteChildrenElements(cartList);

      cartData.forEach((item) => {
        this.renderElement(cartList, this.createShoppingCartTemplate(item));

        this.renderCartCount(item);

        this.renderCartFinalPrice(item);
      });

      const decreaseHandler = (node) => {
        node.addEventListener(`click`, (evt) => {
          decreaseClickHandler(evt.currentTarget.dataset.id);
        });
      };

      const increaseHandler = (node) => {
        node.addEventListener(`click`, (evt) => {
          increaseClickHandler(evt.currentTarget.dataset.id);
        });
      };

      const deleteHandler = (node) => {
        node.addEventListener(`click`, (evt) => {
          deleteClickHandler(evt.currentTarget.dataset.id);
        });
      };

      const decreaseButtons = cartList.querySelectorAll(`.cart__count-decrease`);
      const increaseButtons = cartList.querySelectorAll(`.cart__count-increase`);
      const deleteButtons = cartList.querySelectorAll(`.cart__button-close`);

      decreaseButtons.forEach((button) => {
        decreaseHandler(button);
      });

      increaseButtons.forEach((button) => {
        increaseHandler(button);
      });

      deleteButtons.forEach((button) => {
        deleteHandler(button);
      });
    }
  }

  renderCartCount(data) {
    const cartList = document.querySelector(`.cart__list`);
    const countValue = cartList.querySelector(`.cart__count-value[data-id="${data.articule}"]`);

    this.deleteChildrenElements(countValue);

    this.renderElement(countValue, this.createShoppingCartCountTemplate(data));
  }

  renderCartFinalPrice(data) {
    const cartList = document.querySelector(`.cart__list`);
    const finalPrice = cartList.querySelector(`.cart__final-price[data-id="${data.articule}"]`);

    this.deleteChildrenElements(finalPrice);

    this.renderElement(finalPrice, this.createCartTotalPriceTemplate(data));
  }
}

export const cart = new Cart(
  {
    createShoppingCartTemplate,
    createShoppingCartCountTemplate,
    createCartTotalPriceTemplate
  },
  {
    renderElement,
    deleteChildrenElements
  }
);
