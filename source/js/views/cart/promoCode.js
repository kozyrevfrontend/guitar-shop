import { createDiscountMessageTemplate } from './markups/createDiscountMessageTemplate';
import { renderElement } from '../utils';
import { deleteChildrenElements } from '../utils';

class PromoCode {
  constructor(markups, utils) {
    this.createDiscountMessageTemplate = markups.createDiscountMessageTemplate;
    this.renderElement = utils.renderElement;
    this.deleteChildrenElements = utils.deleteChildrenElements;
  }

  usePromoCode(submitHandler) {
    const form = document.querySelector(`.discount__form`);

    if (form) {
      const button = form.querySelector(`.discount__button`);

      button.addEventListener(`click`, (evt) => {
        evt.preventDefault();

        const formData = new FormData(form);
        let code = null;

        if (formData.get(`discount`)) {
          code = formData.get(`discount`).toLowerCase();
        }

        submitHandler(code);
      });
    }
  }

  renderMessage() {
    const form = document.querySelector(`.discount__form`);

    if (form) {
      renderElement(form, this.createDiscountMessageTemplate());
    }
  }

  removeMessage() {
    const form = document.querySelector(`.discount__form`);
    const message = form.querySelector(`.discount__message`);

    if (form) {
      form.removeChild(message);
    }
  }
}

export const promoCode = new PromoCode(
  {
    createDiscountMessageTemplate
  },
  {
    renderElement,
    deleteChildrenElements
  }
);
