import { createPaginationItemTemplate } from './markups/createPaginationItemTemplate';
import { createPaginationForwardTemplate } from './markups/createPaginationForwardTemplate';
import { renderElement } from '../utils';
import { deleteChildrenElements } from '../utils';

class Pagination {
  constructor(markups, utils) {
    this.createPaginationItemTemplate = markups.createPaginationItemTemplate;
    this.createPaginationForwardTemplate = markups.createPaginationForwardTemplate;
    this.renderElement = utils.renderElement;
    this.deleteChildrenElements = utils.deleteChildrenElements;
  }

  renderPaginationList(totalPages, clickHandler, currentPage, forwardClickHandler) {
    const paginationList = document.querySelector(`.pagination__list`);

    if (paginationList) {
      this.deleteChildrenElements(paginationList);

      for (let count = 1; count <= totalPages; count++) {
        this.renderElement(paginationList, this.createPaginationItemTemplate(count));
      }

      if (totalPages > 1) {
        this.renderElement(paginationList, this.createPaginationForwardTemplate());

        const paginationForward = paginationList.querySelector(`.pagination__link--forward`);

        paginationForward.addEventListener(`click`, (evt) => {
          evt.preventDefault();

          forwardClickHandler();
        });
      }

      const paginationLinks = paginationList.querySelectorAll(`.pagination__link:not(.pagination__link--forward)`);

      const handler = (node) => {
        node.addEventListener(`click`, (evt) => {
          evt.preventDefault();

          const page = parseInt(evt.target.textContent, 10);

          clickHandler(page);
        });
      };

      paginationLinks.forEach((link) => {
        handler(link);

        if (parseInt(link.textContent, 10) === currentPage) {
          link.classList.add(`pagination__link--current`);
        }
      });
    }
  }
}

export const pagination = new Pagination(
  {
    createPaginationItemTemplate,
    createPaginationForwardTemplate
  },
  {
    renderElement,
    deleteChildrenElements
  }
);
