(function () {
  'use strict';

  class State {
    constructor() {
      this.catalogData = {
        SO757575: {
          articule: `SO757575`,
          model: `Честер Bass`,
          type: `электрогитара`,
          popularity: 15,
          stringsNumber: 7,
          price: `17500`,
          image: `card-electro1`
        },
        TK129049: {
          articule: `TK129049`,
          model: `СURT Z300`,
          type: `электрогитара`,
          popularity: 9,
          stringsNumber: 7,
          price: `29500`,
          image: `card-electro2`
        },
        RO111111: {
          articule: `RO111111`,
          model: `Roman LX`,
          type: `укулеле`,
          popularity: 21,
          stringsNumber: 4,
          price: `6800`,
          image: `card-ukulele1`
        },
        TK436457: {
          articule: `TK436457`,
          model: `СURT T300`,
          type: `электрогитара`,
          popularity: 15,
          stringsNumber: 6,
          price: `30000`,
          image: `card-electro3`
        },
        DI192138: {
          articule: `DI192138`,
          model: `Dania Super`,
          type: `акустическая гитара`,
          popularity: 5,
          stringsNumber: 7,
          price: `3500`,
          image: `card-ukulele2`
        },
        SO934345: {
          articule: `SO934345`,
          model: `Честер WX`,
          type: `электрогитара`,
          popularity: 17,
          stringsNumber: 6,
          price: `15300`,
          image: `card-electro1`
        },
        DI082347: {
          articule: `DI082347`,
          model: `Dania VX`,
          type: `укулеле`,
          popularity: 5,
          stringsNumber: 4,
          price: `2200`,
          image: `card-ukulele1`
        },
        SO135646: {
          articule: `SO135646`,
          model: `Честер Plus`,
          type: `электрогитара`,
          popularity: 27,
          stringsNumber: 4,
          price: `30000`,
          image: `card-electro4`
        },
        VO154751: {
          articule: `VO154751`,
          model: `Виолана 300`,
          type: `акустическая гитара`,
          popularity: 3,
          stringsNumber: 7,
          price: `1700`,
          image: `card-ukulele2`
        },
        TK244556: {
          articule: `TK244556`,
          model: `СURT Clasic`,
          type: `электрогитара`,
          popularity: 20,
          stringsNumber: 4,
          price: `23000`,
          image: `card-electro2`
        },
        TK134663: {
          articule: `TK134663`,
          model: `СURT Z250`,
          type: `электрогитара`,
          popularity: 19,
          stringsNumber: 4,
          price: `18700`,
          image: `card-electro1`
        },
        SO123212: {
          articule: `SO123212`,
          model: `Честер 7X`,
          type: `электрогитара`,
          popularity: 30,
          stringsNumber: 7,
          price: `35000`,
          image: `card-electro3`
        },
        SO123234: {
          articule: `SO123234`,
          model: `Честер 6V`,
          type: `электрогитара`,
          popularity: 28,
          stringsNumber: 6,
          price: `14 900`,
          image: `card-electro4`
        },
        VO519510: {
          articule: `VO519510`,
          model: `Виолана Mix`,
          type: `акустическая гитара`,
          popularity: 7,
          stringsNumber: 6,
          price: `7600`,
          image: `card-ukulele2`
        },
        VO457369: {
          articule: `VO457369`,
          model: `Виолана 250x`,
          type: `акустическая гитара`,
          popularity: 19,
          stringsNumber: 6,
          price: `6500`,
          image: `card-ukulele2`
        },
        FB625903: {
          articule: `FB625903`,
          model: `Фабио Лайт`,
          type: `акустическая гитара`,
          popularity: 26,
          stringsNumber: 7,
          price: `12000`,
          image: `card-ukulele2`
        },
        FB576948: {
          articule: `FB576948`,
          model: `Фабио L100`,
          type: `акустическая гитара`,
          popularity: 31,
          stringsNumber: 7,
          price: `9900`,
          image: `card-ukulele2`
        },
        LU012032: {
          articule: `LU012032`,
          model: `Liana Z200`,
          type: `акустическая гитара`,
          popularity: 28,
          stringsNumber: 12,
          price: `8900`,
          image: `card-ukulele2`
        },
        LU546853: {
          articule: `LU546853`,
          model: `Liana Z100`,
          type: `акустическая гитара`,
          popularity: 34,
          stringsNumber: 12,
          price: `10500`,
          image: `card-ukulele2`
        },
        LU458283: {
          articule: `LU458283`,
          model: `Liana Z300`,
          type: `акустическая гитара`,
          popularity: 9,
          stringsNumber: 6,
          price: `13300`,
          image: `card-ukulele2`
        },
        RO324341: {
          articule: `RO324341`,
          model: `Roman RX`,
          type: `укулеле`,
          popularity: 37,
          stringsNumber: 4,
          price: `4800`,
          image: `card-ukulele1`
        },
        RO214235: {
          articule: `RO214235`,
          model: `Roman TX`,
          type: `укулеле`,
          popularity: 5,
          stringsNumber: 4,
          price: `1900`,
          image: `card-ukulele1`
        },
        DI132414: {
          articule: `DI132414`,
          model: `Dania U100`,
          type: `укулеле`,
          popularity: 23,
          stringsNumber: 4,
          price: `2500`,
          image: `card-ukulele1`
        },
        DI934754: {
          articule: `DI934754`,
          model: `Dania WR`,
          type: `укулеле`,
          popularity: 3,
          stringsNumber: 4,
          price: `3800`,
          image: `card-ukulele1`
        },
        DI034292: {
          articule: `DI034292`,
          model: `Dania LE`,
          type: `укулеле`,
          popularity: 10,
          stringsNumber: 4,
          price: `4100`,
          image: `card-ukulele1`
        },
        MI193214: {
          articule: `MI193214`,
          model: `Mirana V10`,
          type: `укулеле`,
          popularity: 14,
          stringsNumber: 4,
          price: `2700`,
          image: `card-ukulele1`
        },
        VO043244: {
          articule: `VO043244`,
          model: `Виолана Mini`,
          type: `укулеле`,
          popularity: 29,
          stringsNumber: 4,
          price: `6700`,
          image: `card-ukulele1`
        }
      };

      this.filters = {
        price: {
          min: `1000`,
          max: `30000`
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

      this.clearFilters = () => {
        this.filters.type.splice(0, this.filters.type.length);
        this.filters.strings.splice(0, this.filters.strings.length);
      };

      this.getTotalPagesCount = (data) => {
        const catalogItemsCount = Object.values(data).length;

        return Math.ceil(catalogItemsCount / this.catalogItemsPerPage);
      };

      this.getCatalogDataPerPage = (data) => {
        return Object.values(data).slice(this.itemsOffset, this.itemsOffset + this.catalogItemsPerPage);
      };

      this.setCurrentPage = (value) => {
        this.currentPage = value;
      };

      this.setItemsOffset = () => {
        this.itemsOffset = (this.currentPage - 1) * this.catalogItemsPerPage;
      };

      this.getCatalogData = () => {
        return this.catalogData;
      };

      this.setFiltersPriceMin = (value) => {
        this.filters.price.min = value;
      };

      this.setFiltersPriceMax = (value) => {
        this.filters.price.max = value;
      };

      this.setFiltersType = (value) => {
        this.filters.type.push(value);
      };

      this.setFiltersStrings = (value) => {
        this.filters.strings.push(value);
      };

      this.setSortType = (value) => {
        this.sort.type = value;
      };

      this.setSortFlow = (value) => {
        this.sort.flow = value;
      };

      this.getFilteredCatalogData = () => {
        const currentData = Object.values(this.catalogData);

        const filteredData = currentData.filter((item) => {
          if (parseInt(item.price, 10) < parseInt(this.filters.price.min, 10) || parseInt(item.price, 10) > parseInt(this.filters.price.max, 10)) {
            return false;
          }

          if (!this.filters.type.includes(item.type)) {
            return false;
          }

          if (!this.filters.strings.includes(item.stringsNumber)) {
            return false;
          }

          return true;
        });

        return filteredData;
      };
    }
  }

  const state = new State();

  class View {
    constructor() {
      this.createCatalogItemTemplate = (card) => {
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
      };

      this.renderCard = (parentElement, template, place = `beforeEnd`) => {
        parentElement.insertAdjacentHTML(place, template);
      };

      this.deleteChildrenElements = (list) => {
        while (list.firstChild) {
          list.removeChild(list.firstChild);
        }
      };

      this.createPaginationItemTemplate = (count) => {
        return (
          `<li class="pagination__item">
          <a class="pagination__link" href="#"><span>${count}</span></a>
        </li>`
        );
      };

      this.createPaginationForwardTemplate = () => {
        return (
          `<li class="pagination__item">
          <a class="pagination__link" href="#"><span>Далее</span></a>
        </li>`
        );
      };

      this.renderPagination = (parentElement, template, place = `beforeEnd`) => {
        parentElement.insertAdjacentHTML(place, template);
      };

      this.renderPaginationForward = (parentElement, template, place = `beforeEnd`) => {
        parentElement.insertAdjacentHTML(place, template);
      };
    }
  }

  const view = new View();

  // Отрисовываем каталог всех товаров
  const catalogList = document.querySelector(`.catalog__list`);
  state.getCatalogDataPerPage(state.getCatalogData()).forEach((item) => {
    view.renderCard(catalogList, view.createCatalogItemTemplate(item));
  });

  // Отрисовываем стартовую пагинацию из расчета всех товаров в каталоге
  const paginationList = document.querySelector(`.pagination__list`);
  for (let count = 1; count <= state.getTotalPagesCount(state.getCatalogData()); count++) {
    view.renderPagination(paginationList, view.createPaginationItemTemplate(count));
  }

  // Если страниц больше одной, отрисовываем кнопку далее
  if (state.getTotalPagesCount(state.getCatalogData()) > 1) {
    view.renderPaginationForward(paginationList, view.createPaginationForwardTemplate());
  }

  // На все элементы пагинации вешаем обратотчики события
  const paginationLinks = document.querySelectorAll(`.pagination__link`);

  const paginationLinkClickHandler = (evt) => {
    evt.preventDefault();

    state.setCurrentPage(parseInt(evt.target.textContent, 10));

    state.setItemsOffset();

    view.deleteChildrenElements(catalogList);

    state.getCatalogDataPerPage(state.getCatalogData()).forEach((item) => {
      view.renderCard(catalogList, view.createCatalogItemTemplate(item));
    });
  };

  paginationLinks.forEach((link) => {
    link.addEventListener(`click`, paginationLinkClickHandler);
  });

  // Программируем логику работы фильтров
  const filtersForm = document.querySelector(`.filters__form`);
  filtersForm.addEventListener(`submit`, (evt) => {
    evt.preventDefault();

    // обнуляем предыдущие значения фильтров
    state.clearFilters();

    const formData = new FormData(evt.target);

    // записываем выбранные пользователем значения фильтров в store
    if (formData.get(`price-min`)) {
      state.setFiltersPriceMin(formData.get(`price-min`));
    } else {
      state.setFiltersPriceMin(`1000`);
    }

    if (formData.get(`price-max`)) {
      state.setFiltersPriceMax(formData.get(`price-max`));
    } else {
      state.setFiltersPriceMax(`30000`);
    }

    if (formData.get(`acoustic`)) {
      state.setFiltersType(`акустическая гитара`);
    }

    if (formData.get(`electro`)) {
      state.setFiltersType(`электрогитара`);
    }

    if (formData.get(`ukulele`)) {
      state.setFiltersType(`укулеле`);
    }

    if (!formData.get(`acoustic`) && !formData.get(`electro`) && !formData.get(`ukulele`)) {
      state.setFiltersType(`акустическая гитара`);
      state.setFiltersType(`электрогитара`);
      state.setFiltersType(`укулеле`);
    }

    if (formData.get(`four-strings`)) {
      state.setFiltersStrings(4);
    }

    if (formData.get(`six-strings`)) {
      state.setFiltersStrings(6);
    }

    if (formData.get(`seven-strings`)) {
      state.setFiltersStrings(7);
    }

    if (formData.get(`twelve-strings`)) {
      state.setFiltersStrings(12);
    }

    if (!formData.get(`four-strings`) && !formData.get(`six-strings`) && !formData.get(`seven-strings`) && !formData.get(`twelve-strings`)) {
      state.setFiltersStrings(4);
      state.setFiltersStrings(6);
      state.setFiltersStrings(7);
      state.setFiltersStrings(12);
    }

    // получаем отфильтрованный массив из каталога
    const filteredData = state.getFilteredCatalogData();

    // очищаем текущий каталог
    view.deleteChildrenElements(catalogList);

    // отрисовываем каталог по отфильтрованным данным
    state.getCatalogDataPerPage(filteredData).forEach((item) => {
      view.renderCard(catalogList, view.createCatalogItemTemplate(item));
    });

    // очищаем текущую пагинацию
    view.deleteChildrenElements(paginationList);

    // отрисовываем пагинацию исходя из пересчитанных страниц в каталоге
    for (let count = 1; count <= state.getTotalPagesCount(filteredData); count++) {
      view.renderPagination(paginationList, view.createPaginationItemTemplate(count));
    }

    if (state.getTotalPagesCount(filteredData) > 1) {
      view.renderPaginationForward(paginationList, view.createPaginationForwardTemplate());
    }
  });

  // записываем введенные пользователем параметры сортировки в store
  const sortByPriceButton = document.querySelector(`#sort-by-price`);
  sortByPriceButton.addEventListener(`click`, () => {
    state.setSortType(`by-price`);
  });

  const sortByPopularityButton = document.querySelector(`#sort-by-popularity`);
  sortByPopularityButton.addEventListener(`click`, () => {
    state.setSortType(`by-popularity`);
  });

  const sortFlowUpButton = document.querySelector(`#sort-flow-up`);
  sortFlowUpButton.addEventListener(`click`, () => {
    state.setSortFlow(`up`);
  });

  const sortFlowDownButton = document.querySelector(`#sort-flow-down`);
  sortFlowDownButton.addEventListener(`click`, () => {
    state.setSortFlow(`down`);
  });

}());

//# sourceMappingURL=main.js.map
