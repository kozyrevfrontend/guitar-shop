import { createPopupTemplate } from './markups/createPopupTemplate';
import { createAddPopupTemplate } from './catalog/markups/createAddPopupTemplate';
import { createSuccessPopupTemplate } from './catalog/markups/createSuccessPopupTemplate';
import { createPopupRemoveTemplate } from './cart/markups/createPopupRemoveTemplate';
import { renderElement } from './utils';

class Popup {
  constructor(markups, utils) {
    this.createPopupTemplate = markups.createPopupTemplate;
    this.createAddPopupTemplate = markups.createAddPopupTemplate;
    this.createSuccessPopupTemplate = markups.createSuccessPopupTemplate;
    this.createPopupRemoveTemplate = markups.createPopupRemoveTemplate;

    this.renderElement = utils.renderElement;

    this.closePopupEscPress = this.closePopupEscPress.bind(this);
  }

  closePopup() {
    const popup = document.querySelector(`.popup`);

    document.body.removeChild(popup);
    document.removeEventListener(`keydown`, this.closePopupEscPress);
  }

  closePopupEscPress(evt) {
    if (evt.key === `Escape`) {
      this.closePopup();
    }
  }

  renderPopupTemplate() {
    this.renderElement(document.body, this.createPopupTemplate());

    const popup = document.querySelector(`.popup`);
    const popupOverlay = popup.querySelector(`.popup__overlay`);

    document.addEventListener(`keydown`, this.closePopupEscPress);

    popupOverlay.addEventListener(`click`, (evt) => {
      if (evt.target === popupOverlay) {
        this.closePopup();
      }
    });
  }

  renderAddPopup(card, addButtonClickHandler) {
    this.renderPopupTemplate();

    const popup = document.querySelector(`.popup`);
    const popupOverlay = popup.querySelector(`.popup__overlay`);

    this.renderElement(popupOverlay, this.createAddPopupTemplate(card));

    const closeButton = popup.querySelector(`.popup-add__close`);
    const addButton = popup.querySelector(`.popup-add__button`);

    closeButton.addEventListener('click', () => {
      this.closePopup();
    });

    addButton.addEventListener(`click`, (evt) => {
      addButtonClickHandler(evt.currentTarget.dataset.id);
      this.closePopup();
      this.renderSuccessPopup();
    });
  }

  renderSuccessPopup() {
    this.renderPopupTemplate();

    const popup = document.querySelector(`.popup`);
    const popupOverlay = popup.querySelector(`.popup__overlay`);

    this.renderElement(popupOverlay, this.createSuccessPopupTemplate());

    const closeButton = popup.querySelector(`.popup-success__close`);
    const continueButton = popup.querySelector(`.popup-success__continue`);
    const openBagButton = popup.querySelector(`.popup-success__open-bag`);

    closeButton.addEventListener('click', () => {
      this.closePopup();
    });

    continueButton.addEventListener(`click`, () => {
      this.closePopup();
    });

    openBagButton.addEventListener(`click`, () => {
      this.closePopup();
    });
  }

  renderRemovePopup(card, removeButtonClickHandler) {
    this.renderPopupTemplate();

    const popup = document.querySelector(`.popup`);
    const popupOverlay = popup.querySelector(`.popup__overlay`);

    this.renderElement(popupOverlay, this.createPopupRemoveTemplate(card));

    const closeButton = popup.querySelector(`.popup-remove__close`);
    const removeButton = popup.querySelector(`.popup-remove__button`);
    const continueButton = popup.querySelector(`.popup-remove__continue`);

    closeButton.addEventListener('click', () => {
      this.closePopup();
    });

    removeButton.addEventListener(`click`, (evt) => {
      removeButtonClickHandler(evt.currentTarget.dataset.id);
      this.closePopup();
    });

    continueButton.addEventListener(`click`, () => {
      this.closePopup();
    });
  }
}

export const popup = new Popup(
  {
    createPopupTemplate,
    createAddPopupTemplate,
    createSuccessPopupTemplate,
    createPopupRemoveTemplate
  },
  {
    renderElement
  }
);
