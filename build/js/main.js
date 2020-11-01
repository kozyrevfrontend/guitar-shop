(function () {
  'use strict';

  const catalog = {
    SO757575: {
      articule: `SO757575`,
      model: `Честер Bass`,
      type: `электрогитара`,
      popularity: 15,
      stringsNumber: 7,
      price: 17500,
      image: `card-electro1`
    },
    TK129049: {
      articule: `TK129049`,
      model: `СURT Z300`,
      type: `электрогитара`,
      popularity: 9,
      stringsNumber: 7,
      price: 29500,
      image: `card-electro2`
    },
    RO111111: {
      articule: `RO111111`,
      model: `Roman LX`,
      type: `укулеле`,
      popularity: 21,
      stringsNumber: 4,
      price: 6800,
      image: `card-ukulele1`
    },
    TK436457: {
      articule: `TK436457`,
      model: `СURT T300`,
      type: `электрогитара`,
      popularity: 15,
      stringsNumber: 6,
      price: 30000,
      image: `card-electro3`
    },
    DI192138: {
      articule: `DI192138`,
      model: `Dania Super`,
      type: `акустическая гитара`,
      popularity: 5,
      stringsNumber: 7,
      price: 3500,
      image: `card-ukulele2`
    },
    SO934345: {
      articule: `SO934345`,
      model: `Честер WX`,
      type: `электрогитара`,
      popularity: 17,
      stringsNumber: 6,
      price: 15300,
      image: `card-electro1`
    },
    DI082347: {
      articule: `DI082347`,
      model: `Dania VX`,
      type: `укулеле`,
      popularity: 5,
      stringsNumber: 4,
      price: 2200,
      image: `card-ukulele1`
    },
    SO135646: {
      articule: `SO135646`,
      model: `Честер Plus`,
      type: `электрогитара`,
      popularity: 27,
      stringsNumber: 4,
      price: 30000,
      image: `card-electro4`
    },
    VO154751: {
      articule: `VO154751`,
      model: `Виолана 300`,
      type: `акустическая гитара`,
      popularity: 3,
      stringsNumber: 7,
      price: 1700,
      image: `card-ukulele2`
    },
    TK244556: {
      articule: `TK244556`,
      model: `СURT Clasic`,
      type: `электрогитара`,
      popularity: 20,
      stringsNumber: 4,
      price: 23000,
      image: `card-electro2`
    },
    TK134663: {
      articule: `TK134663`,
      model: `СURT Z250`,
      type: `электрогитара`,
      popularity: 19,
      stringsNumber: 4,
      price: 18700,
      image: `card-electro1`
    },
    SO123212: {
      articule: `SO123212`,
      model: `Честер 7X`,
      type: `электрогитара`,
      popularity: 30,
      stringsNumber: 7,
      price: 35000,
      image: `card-electro3`
    },
    SO123234: {
      articule: `SO123234`,
      model: `Честер 6V`,
      type: `электрогитара`,
      popularity: 28,
      stringsNumber: 6,
      price: 14900,
      image: `card-electro4`
    },
    VO519510: {
      articule: `VO519510`,
      model: `Виолана Mix`,
      type: `акустическая гитара`,
      popularity: 7,
      stringsNumber: 6,
      price: 7600,
      image: `card-ukulele2`
    },
    VO457369: {
      articule: `VO457369`,
      model: `Виолана 250x`,
      type: `акустическая гитара`,
      popularity: 19,
      stringsNumber: 6,
      price: 6500,
      image: `card-ukulele2`
    },
    FB625903: {
      articule: `FB625903`,
      model: `Фабио Лайт`,
      type: `акустическая гитара`,
      popularity: 26,
      stringsNumber: 7,
      price: 12000,
      image: `card-ukulele2`
    },
    FB576948: {
      articule: `FB576948`,
      model: `Фабио L100`,
      type: `акустическая гитара`,
      popularity: 31,
      stringsNumber: 7,
      price: 9900,
      image: `card-ukulele2`
    },
    LU012032: {
      articule: `LU012032`,
      model: `Liana Z200`,
      type: `акустическая гитара`,
      popularity: 28,
      stringsNumber: 12,
      price: 8900,
      image: `card-ukulele2`
    },
    LU546853: {
      articule: `LU546853`,
      model: `Liana Z100`,
      type: `акустическая гитара`,
      popularity: 34,
      stringsNumber: 12,
      price: 10500,
      image: `card-ukulele2`
    },
    LU458283: {
      articule: `LU458283`,
      model: `Liana Z300`,
      type: `акустическая гитара`,
      popularity: 9,
      stringsNumber: 6,
      price: 13300,
      image: `card-ukulele2`
    },
    RO324341: {
      articule: `RO324341`,
      model: `Roman RX`,
      type: `укулеле`,
      popularity: 37,
      stringsNumber: 4,
      price: 4800,
      image: `card-ukulele1`
    },
    RO214235: {
      articule: `RO214235`,
      model: `Roman TX`,
      type: `укулеле`,
      popularity: 5,
      stringsNumber: 4,
      price: 1900,
      image: `card-ukulele1`
    },
    DI132414: {
      articule: `DI132414`,
      model: `Dania U100`,
      type: `укулеле`,
      popularity: 23,
      stringsNumber: 4,
      price: 2500,
      image: `card-ukulele1`
    },
    DI934754: {
      articule: `DI934754`,
      model: `Dania WR`,
      type: `укулеле`,
      popularity: 3,
      stringsNumber: 4,
      price: 3800,
      image: `card-ukulele1`
    },
    DI034292: {
      articule: `DI034292`,
      model: `Dania LE`,
      type: `укулеле`,
      popularity: 10,
      stringsNumber: 4,
      price: 4100,
      image: `card-ukulele1`
    },
    MI193214: {
      articule: `MI193214`,
      model: `Mirana V10`,
      type: `укулеле`,
      popularity: 14,
      stringsNumber: 4,
      price: 2700,
      image: `card-ukulele1`
    },
    VO043244: {
      articule: `VO043244`,
      model: `Виолана Mini`,
      type: `укулеле`,
      popularity: 29,
      stringsNumber: 4,
      price: 6700,
      image: `card-ukulele1`
    }
  };

  class State {
    constructor(data) {
      this.catalogData = data;

      this.filters = {
        price: {
          min: null,
          max: null
        },
        type: [],
        strings: []
      };

      this.sort = {
        type: ``,
        flow: ``
      };

      this.currentPage = 1;

      this.catalogItemsPerPage = 9;

      this.itemsOffset = 0;
    }

    clearFilters() {
      this.filters.type.splice(0, this.filters.type.length);
      this.filters.strings.splice(0, this.filters.strings.length);
    }

    getTotalPagesCount() {
      const catalogItemsCount = Object.values(this.getSortedData()).length;

      return Math.ceil(catalogItemsCount / this.catalogItemsPerPage);
    }

    getCatalogDataPerPage() {
      return Object.values(this.getSortedData()).slice(this.itemsOffset, this.itemsOffset + this.catalogItemsPerPage);
    }

    setCurrentPage(value) {
      this.currentPage = value;
    }

    getCurrentPage() {
      return this.currentPage;
    }

    setItemsOffset() {
      this.itemsOffset = (this.currentPage - 1) * this.catalogItemsPerPage;
    }

    getCatalogData() {
      return this.catalogData;
    }

    setFilters(objectData) {
      this.filters.price.min = objectData.priceMin;
      this.filters.price.max = objectData.priceMax;
      this.filters.type = objectData.type;
      this.filters.strings = objectData.strings;
    }

    getFilteredCatalogData() {
      const currentData = Object.values(this.catalogData);

      if (this.filters.price.min === null && this.filters.price.max === null && this.filters.type.length === 0 && this.filters.strings.length === 0) {
        return currentData;
      }

      const filteredData = currentData.filter((item) => {
        if (this.filters.price.min && item.price < this.filters.price.min) {
          return false;
        }

        if (this.filters.price.max && item.price > this.filters.price.max) {
          return false;
        }

        if (this.filters.type.length > 0 && !this.filters.type.includes(item.type)) {
          return false;
        }

        if (this.filters.strings.length > 0 && !this.filters.strings.includes(item.stringsNumber)) {
          return false;
        }

        return true;
      });

      return filteredData;
    }

    setSortType(value) {
      this.sort.type = value;
    }

    setSortFlow(value) {
      this.sort.flow = value;
    }

    getSortedData() {
      const catalogData = Object.values(this.getFilteredCatalogData());

      return catalogData.sort((a, b) => {
        if (this.sort.flow === `down` && this.sort.type === `by-price`) {
          return parseInt(b.price, 10) - parseInt(a.price, 10);
        } else if (this.sort.flow === `up` && this.sort.type === `by-popularity`) {
          return a.popularity - b.popularity;
        } else if (this.sort.flow === `down` && this.sort.type === `by-popularity`) {
          return b.popularity - a.popularity;
        } else if (this.sort.flow === `up` && this.sort.type === `by-price`) {
          return parseInt(a.price, 10) - parseInt(b.price, 10);
        } else if (this.sort.flow === `up` && this.sort.type === ``) {
          return parseInt(a.price, 10) - parseInt(b.price, 10);
        } else if (this.sort.flow === `down` && this.sort.type === ``) {
          return parseInt(b.price, 10) - parseInt(a.price, 10);
        } else if (this.sort.flow === `` && this.sort.type === `by-price`) {
          return parseInt(a.price, 10) - parseInt(b.price, 10);
        } else if (this.sort.flow === `` && this.sort.type === `by-popularity`) {
          return a.popularity - b.popularity;
        } else {
          return catalogData;
        }
      });
    }
  }

  class View {
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
      const priceMin = filtersForm.querySelector(`#price-min`);
      const priceMax = filtersForm.querySelector(`#price-max`);
      const acousticCheckbox = filtersForm.querySelector(`#acoustic`);
      const electroCheckbox = filtersForm.querySelector(`#electro`);
      const ukuleleCheckbox = filtersForm.querySelector(`#ukulele`);
      const fourStringsCheckbox = filtersForm.querySelector(`#four-strings`);
      const sixStringsCheckbox = filtersForm.querySelector(`#six-strings`);
      const sevenStringsCheckbox = filtersForm.querySelector(`#seven-strings`);
      const twelveStringsCheckbox = filtersForm.querySelector(`#twelve-strings`);

      const comparePriceValues = (evt) => {
        if (parseInt(evt.target.value, 10) < 0) {
          evt.target.setCustomValidity(`Цена товара не может быть меньше 0`);
          evt.target.value = ``;
        } else {
          evt.target.setCustomValidity(``);
        }

        if (parseInt(priceMin.value, 10) > parseInt(priceMax.value, 10)) {
          const temp = priceMax.value;
          priceMax.value = priceMin.value;
          priceMin.value = temp;
        }
      };

      priceMin.addEventListener(`change`, (priceMinEvt) => {
        comparePriceValues(priceMinEvt);
      });

      priceMax.addEventListener(`change`, (priceMaxEvt) => {
        comparePriceValues(priceMaxEvt);
      });

      // Блокируем чекбоксы в зависимости от выбранных типов гитар
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
      // ----------

      filtersForm.addEventListener(`submit`, (evt) => {
        evt.preventDefault();

        const formData = new FormData(filtersForm);

        let filterValues = {
          priceMin: null,
          priceMax: null,
          type: [],
          strings: []
        };

        if (formData.get(`price-min`)) {
          filterValues.priceMin = parseInt(formData.get(`price-min`), 10);
        }

        if (formData.get(`price-max`)) {
          filterValues.priceMax = parseInt(formData.get(`price-max`), 10);
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

        submitHandler(filterValues);
      });
    }

    setSortSettings(sortTypeHandler, sortFlowHandler) {
      const sortByTypeButtons = document.querySelectorAll(`.sort__options-button`);
      const sortByFlowButtons = document.querySelectorAll(`.sort__view-button`);
      const sortByPriceButton = document.querySelector(`#by-price`);
      const sortByPopularityButton = document.querySelector(`#by-popularity`);
      const sortFlowUpButton = document.querySelector(`#up`);
      const sortFlowDownButton = document.querySelector(`#down`);

      sortByPriceButton.addEventListener(`click`, (evt) => {
        const sortType = evt.currentTarget.id;

        sortByTypeButtons.forEach((button) => {
          button.classList.remove(`sort__options-button--current`);
        });

        evt.currentTarget.classList.add(`sort__options-button--current`);

        sortTypeHandler(sortType);
      });

      sortByPopularityButton.addEventListener(`click`, (evt) => {
        const sortType = evt.currentTarget.id;

        sortByTypeButtons.forEach((button) => {
          button.classList.remove(`sort__options-button--current`);
        });

        evt.currentTarget.classList.add(`sort__options-button--current`);

        sortTypeHandler(sortType);
      });

      sortFlowUpButton.addEventListener(`click`, (evt) => {
        const sortFlow = evt.currentTarget.id;

        sortByFlowButtons.forEach((button) => {
          button.classList.remove(`sort__view-button--current`);
        });

        evt.currentTarget.classList.add(`sort__view-button--current`);

        sortFlowHandler(sortFlow);
      });

      sortFlowDownButton.addEventListener(`click`, (evt) => {
        const sortFlow = evt.currentTarget.id;

        sortByFlowButtons.forEach((button) => {
          button.classList.remove(`sort__view-button--current`);
        });

        evt.currentTarget.classList.add(`sort__view-button--current`);

        sortFlowHandler(sortFlow);
      });
    }
  }

  class Presenter {
    constructor(myState, myView) {
      this.state = myState;
      this.view = myView;

      this.paginationLinkClickHandler = this.paginationLinkClickHandler.bind(this);
      this.filtersFormSubmitHandler = this.filtersFormSubmitHandler.bind(this);
      this.sortByTypeHandler = this.sortByTypeHandler.bind(this);
      this.sortByFlowHandler = this.sortByFlowHandler.bind(this);
    }

    init() {
      this.renderCatalogPage();
    }

    renderCatalogPage() {
      this.view.renderCatalog(this.state.getCatalogDataPerPage());

      this.renderPaginationList();

      this.setFiltersFormSettings();

      this.setSortSettings();
    }

    renderPaginationList() {
      this.view.renderPaginationList(this.state.getTotalPagesCount(), this.paginationLinkClickHandler, this.state.getCurrentPage());
    }

    setFiltersFormSettings() {
      this.view.setFiltersFormSettings(this.filtersFormSubmitHandler);
    }

    setSortSettings() {
      this.view.setSortSettings(this.sortByTypeHandler, this.sortByFlowHandler);
    }

    paginationLinkClickHandler(page) {
      // обновляем текущую страницу в state
      this.state.setCurrentPage(page);

      // обновляем смещение элементов каталога в state
      this.state.setItemsOffset();

      // перерисовываем каталог
      this.view.renderCatalog(this.state.getCatalogDataPerPage());

      // перерисовываем пагинацию
      this.renderPaginationList();
    }

    filtersFormSubmitHandler(values) {
      // обновляем значения фильтров в state
      this.state.setFilters(values);

      // перерисовываем каталог
      this.view.renderCatalog(this.state.getCatalogDataPerPage());

      // перерисовываем пагинацию
      this.renderPaginationList();
    }

    sortByTypeHandler(type) {
      // обновляем значение типа сортировки в state
      this.state.setSortType(type);

      // перерисовываем каталог
      this.view.renderCatalog(this.state.getCatalogDataPerPage());

      // перерисовываем пагинацию
      this.renderPaginationList();
    }

    sortByFlowHandler(flow) {
      // обновляем значение направления сортировки в state
      this.state.setSortFlow(flow);

      // перерисовываем каталог
      this.view.renderCatalog(this.state.getCatalogDataPerPage());

      // перерисовываем пагинацию
      this.renderPaginationList();
    }
  }

  const state = new State(catalog);
  const view = new View();
  const presenter = new Presenter(state, view);

  presenter.init();

}());

//# sourceMappingURL=main.js.map
