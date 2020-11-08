import { createCartTotalPriceTemplate } from './markups/createCartTotalPriceTemplate';
import { renderElement } from '../utils';
import { deleteChildrenElements } from '../utils';

class TotalPrice {
  constructor(markups, utils) {
    this.createCartTotalPriceTemplate = markups.createCartTotalPriceTemplate;
    this.renderElement = utils.renderElement;
    this.deleteChildrenElements = utils.deleteChildrenElements;
  }

  renderTotalPrice(totalPrice) {
    const totalPricecontainer = document.querySelector(`.order__total-price`);

    if (totalPricecontainer) {
      this.deleteChildrenElements(totalPricecontainer);

      this.renderElement(totalPricecontainer, this.createCartTotalPriceTemplate(totalPrice));
    }
  }
}

export const totalPrice = new TotalPrice(
  {
    createCartTotalPriceTemplate
  },
  {
    renderElement,
    deleteChildrenElements
  }
);
