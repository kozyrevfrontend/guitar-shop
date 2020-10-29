export class View {
  createCatalogItemTemplate(card) {
    return (
      `<li class="catalog__item card">
      <h3 class="card__title">${card.model}</h3>
      <span class="card__price">${card.price} ₽</span>
      <div class="card__popularity-wrapper">
        <svg width="10" height="10"><use href="img/sprite_auto.svg#icon-star"></use></svg>
        <svg width="10" height="10"><use href="img/sprite_auto.svg#icon-star"></use></svg>
        <svg width="10" height="10"><use href="img/sprite_auto.svg#icon-star"></use></svg>
        <svg width="10" height="10"><use href="img/sprite_auto.svg#icon-star"></use></svg>
        <svg width="10" height="10"><use href="img/sprite_auto.svg#icon-star"></use></svg>
        <span class="card__popularity">${card.popularity}</span>
      </div>
      <a class="card__link-more" href="#"><span>Подробнее</span></a>
      <button class="card__button" type="button">
        <svg width="12" height="12">
          <use href="img/sprite_auto.svg#icon-shoping-bag"></use>
        </svg>
        <span>Купить</span>
      </button>
      <div class="card__image">
        <picture>
          <source type="image/webp" srcset="img/${card.image}@1x.webp 1x, img/${card.image}@2x.webp 2x">
          <img src="img/${card.image}@1x.png" srcset="img/${card.image}@2x.png 2x" alt="${card.model}" width="68" height="190">
        </picture>
      </div>
    </li>`
    );
  }

  renderCard(parentElement, template, place = `beforeEnd`) {
    parentElement.insertAdjacentHTML(place, template);
  }

  deleteChildrenElements(list) {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  }

  renderCatalog(catalogData) {
    const catalogList = document.querySelector(`.catalog__list`);

    this.deleteChildrenElements(catalogList);

    catalogData.forEach((item) => {
      this.renderCard(catalogList, this.createCatalogItemTemplate(item));
    });
  }

  createPaginationItemTemplate(count) {
    return (
      `<li class="pagination__item">
        <a class="pagination__link" href="#"><span>${count}</span></a>
      </li>`
    );
  }

  createPaginationForwardTemplate() {
    return (
      `<li class="pagination__item">
        <a class="pagination__link pagination__link--forward" href="#"><span>Далее</span></a>
      </li>`
    );
  }

  renderPaginationItem(parentElement, template, place = `beforeEnd`) {
    parentElement.insertAdjacentHTML(place, template);
  }

  renderPaginationForward(parentElement, template, place = `beforeEnd`) {
    parentElement.insertAdjacentHTML(place, template);
  }

  renderPaginationList(totalPages, clickHandler, currentPage) {
    const paginationList = document.querySelector(`.pagination__list`);

    this.deleteChildrenElements(paginationList);

    for (let count = 1; count <= totalPages; count++) {
      this.renderPaginationItem(paginationList, this.createPaginationItemTemplate(count));
    }

    if (totalPages > 1) {
      this.renderPaginationForward(paginationList, this.createPaginationForwardTemplate());
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

  setFiltersFormSettings(submitHandler) {
    const filtersForm = document.querySelector(`.filters__form`);
    const acousticCheckbox = filtersForm.querySelector(`#acoustic`);
    const electroCheckbox = filtersForm.querySelector(`#electro`);
    const ukuleleCheckbox = filtersForm.querySelector(`#ukulele`);
    const fourStringsCheckbox = filtersForm.querySelector(`#four-strings`);
    const sixStringsCheckbox = filtersForm.querySelector(`#six-strings`);
    const sevenStringsCheckbox = filtersForm.querySelector(`#seven-strings`);
    const twelveStringsCheckbox = filtersForm.querySelector(`#twelve-strings`);

    const checkCheckboxState = () => {
      if (acousticCheckbox.checked && !electroCheckbox.checked && !ukuleleCheckbox.checked) {
        fourStringsCheckbox.setAttribute(`disabled`, `disabled`);
      } else if (!acousticCheckbox.checked && electroCheckbox.checked && !ukuleleCheckbox.checked) {
        twelveStringsCheckbox.setAttribute(`disabled`, `disabled`);
      } else if (!acousticCheckbox.checked && !electroCheckbox.checked && ukuleleCheckbox.checked) {
        sixStringsCheckbox.setAttribute(`disabled`, `disabled`);
        sevenStringsCheckbox.setAttribute(`disabled`, `disabled`);
        twelveStringsCheckbox.setAttribute(`disabled`, `disabled`);
      } else if (!acousticCheckbox.checked && electroCheckbox.checked && ukuleleCheckbox.checked) {
        twelveStringsCheckbox.setAttribute(`disabled`, `disabled`);
        sixStringsCheckbox.removeAttribute(`disabled`);
        sevenStringsCheckbox.removeAttribute(`disabled`);
      } else {
        fourStringsCheckbox.removeAttribute(`disabled`);
        sixStringsCheckbox.removeAttribute(`disabled`);
        sevenStringsCheckbox.removeAttribute(`disabled`);
        twelveStringsCheckbox.removeAttribute(`disabled`);
      }
    };

    acousticCheckbox.addEventListener(`change`, checkCheckboxState);
    electroCheckbox.addEventListener(`change`, checkCheckboxState);
    ukuleleCheckbox.addEventListener(`change`, checkCheckboxState);

    filtersForm.addEventListener(`submit`, (evt) => {
      evt.preventDefault();

      const formData = new FormData(filtersForm);

      let filterValues = {
        priceMin: ``,
        priceMax: ``,
        type: [],
        strings: []
      };

      if (formData.get(`price-min`)) {
        filterValues.priceMin = formData.get(`price-min`);
      } else {
        filterValues.priceMin = `1000`;
      }

      if (formData.get(`price-max`)) {
        filterValues.priceMax = formData.get(`price-max`);
      } else {
        filterValues.priceMax = `30000`;
      }

      if (formData.get(`acoustic`)) {
        filterValues.type.push(`акустическая гитара`);
      }

      if (formData.get(`electro`)) {
        filterValues.type.push(`электрогитара`);
      }

      if (formData.get(`ukulele`)) {
        filterValues.type.push(`укулеле`);
      }

      if (!formData.get(`acoustic`) && !formData.get(`electro`) && !formData.get(`ukulele`)) {
        filterValues.type = [`акустическая гитара`, `электрогитара`, `укулеле`];
      }

      if (formData.get(`four-strings`)) {
        filterValues.strings.push(4);
      }

      if (formData.get(`six-strings`)) {
        filterValues.strings.push(6);
      }

      if (formData.get(`seven-strings`)) {
        filterValues.strings.push(7);
      }

      if (formData.get(`twelve-strings`)) {
        filterValues.strings.push(12);
      }

      if (!formData.get(`four-strings`) && !formData.get(`six-strings`) && !formData.get(`seven-strings`) && !formData.get(`twelve-strings`)) {
        filterValues.strings = [4, 6, 7, 12];
      }

      submitHandler(filterValues);
    });
  }
}
