import { createCatalogItemTemplate } from './markups/createCatalogItemTemplate';
import { renderElement } from '../utils';
import { deleteChildrenElements } from '../utils';

class Catalog {
  constructor(murkups, utils) {
    this.createCatalogItemTemplate = murkups.createCatalogItemTemplate;
    this.renderElement = utils.renderElement;
    this.deleteChildrenElements = utils.deleteChildrenElements;
  }

  renderCatalog(catalogData, clickHandler) {
    const catalogList = document.querySelector(`.catalog__list`);

    if (catalogList) {
      this.deleteChildrenElements(catalogList);

      catalogData.forEach((item) => {
        this.renderElement(catalogList, this.createCatalogItemTemplate(item));
      });

      const cardButtons = catalogList.querySelectorAll(`.card__button`);

      const handler = (node) => {
        node.addEventListener(`click`, (evt) => {
          evt.preventDefault();

          clickHandler(evt.currentTarget.dataset.id);
        });
      };

      cardButtons.forEach((button) => {
        handler(button);
      });
    }
  }
}

export const catalogView = new Catalog(
  {
    createCatalogItemTemplate
  },
  {
    renderElement,
    deleteChildrenElements
  }
);
