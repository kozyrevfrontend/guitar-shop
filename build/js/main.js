(function () {
  'use strict';

  // export const GUITAR_TYPES = {
  //   ELECTRO: `ELECTRO`,
  //   ACOUSTIC: `ACOUSTIC`,
  //   UKULELE: `UKULELE`
  // };

  // export const GUITAR_NAMES = {
  //   ELECTRO: {
  //     single: `электрогитара`,
  //     multiple: `Электрогитары`
  //   }
  // };

  const catalogData = {
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
        type: null,
        flow: null
      };

      this.shoppingCart = JSON.parse(localStorage.getItem(`shoppingCart`)) || {};

      this.currentPage = 1;

      this.catalogItemsPerPage = 9;

      this.itemsOffset = 0;

      this.promo = {
        gitarahit: {
          discountPercentage: 0.1,
          discountRoubles: 0,
          discountLimit: 1
        },
        supergitara: {
          discountPercentage: 0,
          discountRoubles: 700,
          discountLimit: 1
        },
        gitara2020: {
          discountPercentage: 0,
          discountRoubles: 3500,
          discountLimit: 0.3
        }
      };

      this.usersPromoCode = null;
    }

    setUsersPromoCode(code) {
      this.usersPromoCode = code;
    }

    validateUsersPromoCode() {
      if (!this.promo[this.usersPromoCode] && this.usersPromoCode !== null) {
        return false;
      }

      return true;
    }

    getShoppingCartTotalPrice() {
      const goods = Object.values(this.shoppingCart);
      const promo = this.usersPromoCode;

      if (goods.length > 0) {
        let totalPrice = null;

        goods.forEach((item) => {
          totalPrice += item.finalPrice;
        });

        if (this.promo[this.usersPromoCode] && this.usersPromoCode !== null) {
          let discount = totalPrice * this.promo[promo].discountPercentage + this.promo[promo].discountRoubles;

          if (discount / totalPrice > this.promo[promo].discountLimit) {
            discount = totalPrice * this.promo[promo].discountLimit;
          }

          totalPrice -= discount;
        }

        return totalPrice;
      }

      return 0;
    }

    addGoodsInShoppingCart(id) {
      if (this.shoppingCart[id]) {
        this.shoppingCart[id].count++;
        this.shoppingCart[id].finalPrice = this.shoppingCart[id].count * this.shoppingCart[id].price;
        localStorage.setItem(`shoppingCart`, JSON.stringify(this.shoppingCart));
        return;
      }

      const good = this.catalogData[id];
      const articule = good.articule;

      good.count = 1;
      good.finalPrice = good.count * good.price;

      this.shoppingCart[articule] = good;

      localStorage.setItem(`shoppingCart`, JSON.stringify(this.shoppingCart));
    }

    deleteGoodFromShoppingCart(id) {
      if (this.shoppingCart[id]) {
        delete this.shoppingCart[id];
        localStorage.setItem(`shoppingCart`, JSON.stringify(this.shoppingCart));
      }
    }

    getCartFromLocalStorage() {
      if (localStorage.getItem(`shoppingCart`)) {
        return Object.values(JSON.parse(localStorage.getItem(`shoppingCart`)));
      }
      return Object.values({});
    }

    increaseCartCount(id) {
      this.shoppingCart[id].count++;
      this.shoppingCart[id].finalPrice = this.shoppingCart[id].count * this.shoppingCart[id].price;
      localStorage.setItem(`shoppingCart`, JSON.stringify(this.shoppingCart));
    }

    decreaseCartCount(id) {
      if (this.shoppingCart[id].count > 1) {
        this.shoppingCart[id].count--;
        this.shoppingCart[id].finalPrice = this.shoppingCart[id].count * this.shoppingCart[id].price;
        localStorage.setItem(`shoppingCart`, JSON.stringify(this.shoppingCart));
      }
    }

    countGoodsInShoppingCart() {
      const goods = this.getCartFromLocalStorage();
      if (goods.length > 0) {
        let summ = null;

        goods.forEach((good) => {
          summ += good.count;
        });

        return summ;
      }

      return goods.length;
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
      if (this.sort.type || this.sort.flow) {
        return Object.values(this.getSortedData()).slice(this.itemsOffset, this.itemsOffset + this.catalogItemsPerPage);
      }

      return Object.values(this.getFilteredCatalogData()).slice(this.itemsOffset, this.itemsOffset + this.catalogItemsPerPage);
    }

    setCurrentPage(value) {
      this.currentPage = value;
    }

    setNextPage() {
      if (this.currentPage < this.getTotalPagesCount()) {
        this.currentPage++;
      }
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
      this.currentPage = 1;
      this.itemsOffset = 0;
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

      const flow = this.sort.flow || `up`;
      const type = this.sort.type || `by-price`;
      const sorted = catalogData.sort((a, b) => {
        if (type === `by-popularity`) {
          return a.popularity - b.popularity;
        }
        return parseInt(a.price, 10) - parseInt(b.price, 10);
      });

      return flow === `up` ? sorted : sorted.reverse();
    }
  }

  function createCatalogItemTemplate(card) {
    return (
      `<li class="catalog__item card">
    <h3 class="card__title">${card.model}</h3>
    <span class="card__price">${card.price.toLocaleString(`ru-RU`)} ₽</span>
    <div class="card__popularity-wrapper">
      <svg width="10" height="10"><use href="img/sprite_auto.svg#icon-star"></use></svg>
      <svg width="10" height="10"><use href="img/sprite_auto.svg#icon-star"></use></svg>
      <svg width="10" height="10"><use href="img/sprite_auto.svg#icon-star"></use></svg>
      <svg width="10" height="10"><use href="img/sprite_auto.svg#icon-star"></use></svg>
      <svg width="10" height="10"><use href="img/sprite_auto.svg#icon-star"></use></svg>
      <span class="card__popularity">${card.popularity}</span>
    </div>
    <a class="card__link-more" href="#"><span>Подробнее</span></a>
    <button class="card__button" type="button" data-id="${card.articule}">
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

  function renderElement(parentElement, template, place = `beforeend`) {
    parentElement.insertAdjacentHTML(place, template);
  }

  function deleteChildrenElements(list) {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  }

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

  const catalogView = new Catalog(
    {
      createCatalogItemTemplate
    },
    {
      renderElement,
      deleteChildrenElements
    }
  );

  function createPopupTemplate() {
    return (
      `<div class="popup">
      <div class="popup__overlay">
      </div>
    </div>`
    );
  }

  function createAddPopupTemplate(card) {
    return (
      `<section class="popup-add">
      <h2 class="popup-add__title">Добавить товар в корзину</h2>
      <div class="popup-add__wrapper">
        <picture>
          <source type="image/webp" srcset="img/${card.image}@1x.webp 1x, img/${card.image}@2x.webp 2x">
          <img src="img/${card.image}@1x.png" srcset="img/${card.image}@1x.png 2x" alt="${card.model}" width="48" height="124">
        </picture>
        <div class="popup-add__description">
          <h3 class="popup-add__model">Гитара ${card.model}</h3>
          <p class="popup-add__articule">Артикул: ${card.articule}</p>
          <p class="popup-add__type">${card.type}, <span>${card.stringsNumber} струнная</span></p>
          <p class="popup-add__price">Цена: ${card.price.toLocaleString(`ru-RU`)} ₽</p>
        </div>
        <button class="popup-add__button" data-id="${card.articule}">Добавить в корзину</button>
        <button class="popup-add__close" aria-label="Закрыть попап">
          <svg width="18" height="18">
            <use href="img/sprite_auto.svg#icon-cross"></use>
          </svg>
        </button>
      </div>
    </section>`
    );
  }

  function createSuccessPopupTemplate() {
    return (
      `<div class="popup-success">
      <p class="popup-success__title">Товар успешно добавлен в корзину</p>
      <div class="popup-success__wrapper">
        <a class="popup-success__open-bag" href="cart.html"><span>Перейти в корзину</span></a>
        <button class="popup-success__continue">Продолжить покупки</button>
        <button class="popup-success__close" aria-label="Закрыть попап">
          <svg width="18" height="18">
            <use href="img/sprite_auto.svg#icon-cross"></use>
          </svg>
        </button>
      </div>
    </div>`
    );
  }

  function createPopupRemoveTemplate(card) {
    return (
    `<section class="popup-remove">
    <h2 class="popup-remove__title">Удалить этот товар?</h2>
    <div class="popup-remove__wrapper">
      <picture>
        <source type="image/webp" srcset="img/${card.image}@1x.webp 1x, img/${card.image}@2x.webp 2x">
        <img src="img/${card.image}@1x.png" srcset="img/${card.image}@1x.png 2x" alt="${card.model}" width="48" height="124">
      </picture>
      <div class="popup-remove__description">
        <h3 class="popup-remove__model">Гитара ${card.model}</h3>
        <p class="popup-remove__articule">Артикул: ${card.articule}</p>
        <p class="popup-remove__type">${card.type}, <span>${card.stringsNumber} струнная</span></p>
        <p class="popup-remove__price">Цена: ${card.price.toLocaleString(`ru-RU`)} ₽</p>
      </div>
      <div class="popup-remove__wrapper-inner">
        <button class="popup-remove__button" data-id="${card.articule}">Удалить товар</button>
        <button class="popup-remove__continue">Продолжить покупки</button>
      </div>
      <button class="popup-remove__close" aria-label="Закрыть попап">
        <svg width="18" height="18">
          <use href="img/sprite_auto.svg#icon-cross"></use>
        </svg>
      </button>
    </div>
  </section>`
    );
  }

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

  const popup = new Popup(
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

  function createShoppingCartValueTemplate(value) {
    return `<span class="user-menu__value">${value}</span>`;
  }

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

  const shoppingCart = new ShoppingCart(
    {
      createShoppingCartValueTemplate
    },
    {
      renderElement
    }
  );

  function createPaginationItemTemplate(count) {
    return (
      `<li class="pagination__item">
      <a class="pagination__link" href="#"><span>${count}</span></a>
    </li>`
    );
  }

  function createPaginationForwardTemplate() {
    return (
      `<li class="pagination__item">
      <a class="pagination__link pagination__link--forward" href="#"><span>Далее</span></a>
    </li>`
    );
  }

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

  const pagination = new Pagination(
    {
      createPaginationItemTemplate,
      createPaginationForwardTemplate
    },
    {
      renderElement,
      deleteChildrenElements
    }
  );

  class Filters {
    setFiltersFormSettings(submitHandler) {
      const filtersForm = document.querySelector(`.filters__form`);

      if (filtersForm) {
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
    }
  }

  const filters = new Filters();

  class Sort {
    setSortSettings(sortTypeHandler, sortFlowHandler) {
      const sort = document.querySelector(`.sort`);

      if (sort) {
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
  }

  const sort = new Sort();

  class CatalogPresenter {
    constructor(state, catalogView, popupView, shoppingCartView, paginationView, filtersView, sortView) {
      this.state = state;
      this.catalogView = catalogView;
      this.popupView = popupView;
      this.shoppingCartView = shoppingCartView;
      this.paginationView = paginationView;
      this.filtersView = filtersView;
      this.sortView = sortView;

      this.paginationLinkClickHandler = this.paginationLinkClickHandler.bind(this);
      this.filtersFormSubmitHandler = this.filtersFormSubmitHandler.bind(this);
      this.sortByTypeHandler = this.sortByTypeHandler.bind(this);
      this.sortByFlowHandler = this.sortByFlowHandler.bind(this);
      this.cardButtonClickHandler = this.cardButtonClickHandler.bind(this);
      this.popupAddButtonClickHandler = this.popupAddButtonClickHandler.bind(this);
      this.paginationLinkForwardClickHandler = this.paginationLinkForwardClickHandler.bind(this);
    }

    init() {
      this.renderCatalogPage();
    }

    renderCatalogPage() {
      this.renderShoppingCartValue();

      this.renderCatalog();

      this.renderPaginationList();

      this.setFiltersFormSettings();

      this.setSortSettings();
    }

    renderCatalog() {
      this.catalogView.renderCatalog(this.state.getCatalogDataPerPage(), this.cardButtonClickHandler);
    }

    renderShoppingCartValue() {
      this.shoppingCartView.renderShoppingCartValue(this.state.countGoodsInShoppingCart());
    }

    renderPaginationList() {
      this.paginationView.renderPaginationList(this.state.getTotalPagesCount(), this.paginationLinkClickHandler, this.state.getCurrentPage(), this.paginationLinkForwardClickHandler);
    }

    setFiltersFormSettings() {
      this.filtersView.setFiltersFormSettings(this.filtersFormSubmitHandler);
    }

    setSortSettings() {
      this.sortView.setSortSettings(this.sortByTypeHandler, this.sortByFlowHandler);
    }

    cardButtonClickHandler(id) {
      this.popupView.renderAddPopup(this.state.getCatalogData()[id], this.popupAddButtonClickHandler);
    }

    popupAddButtonClickHandler(id) {
      // добавляем товар в state
      this.state.addGoodsInShoppingCart(id);

      // удаляем старое значение из view
      this.shoppingCartView.removeShoppingCartValue();

      // перерисовываем кол-во товаров в корзине
      this.renderShoppingCartValue();
    }

    paginationLinkClickHandler(page) {
      // обновляем текущую страницу в state
      this.state.setCurrentPage(page);

      // обновляем смещение элементов каталога в state
      this.state.setItemsOffset();

      // перерисовываем каталог
      this.renderCatalog();

      // перерисовываем пагинацию
      this.renderPaginationList();
    }

    paginationLinkForwardClickHandler() {
      // обновляем текущую страницу в state
      this.state.setNextPage();

      // обновляем смещение элементов каталога в state
      this.state.setItemsOffset();

      // перерисовываем каталог
      this.renderCatalog();

      // перерисовываем пагинацию
      this.renderPaginationList();
    }

    filtersFormSubmitHandler(values) {
      // обновляем значения фильтров в state
      this.state.setFilters(values);

      // перерисовываем каталог
      this.renderCatalog();

      // перерисовываем пагинацию
      this.renderPaginationList();
    }

    sortByTypeHandler(type) {
      // обновляем значение типа сортировки в state
      this.state.setSortType(type);

      // перерисовываем каталог
      this.renderCatalog();

      // перерисовываем пагинацию
      this.renderPaginationList();
    }

    sortByFlowHandler(flow) {
      // обновляем значение направления сортировки в state
      this.state.setSortFlow(flow);

      // перерисовываем каталог
      this.renderCatalog();

      // перерисовываем пагинацию
      this.renderPaginationList();
    }
  }

  function createShoppingCartTemplate(card) {
    return (
      `<li class="cart__item">
      <div class="cart__wrapper">
        <div class="cart__wrapper-inner">
          <h2 class="cart__title">Электрогитара ${card.model}</h2>
          <p class="cart__articule">Артикул: ${card.articule}</p>
          <p class="cart__description">${card.type}, <span>${card.stringsNumber} струнная</span></p>
        </div>
        <div class="cart__image-wrapper">
          <picture>
            <source type="image/webp" srcset="img/${card.image}@1x.webp 1x, img/${card.image}@2x.webp 2x">
            <img src="img/${card.image}@1x.png" srcset="img/${card.image}@2x.png 2x" alt="${card.model}" width="48" height="124">
          </picture>
        </div>
      </div>
      <p class="cart__catalog-price">${card.price.toLocaleString(`ru-RU`)} ₽</p>
        <div class="cart__count">
          <button class="cart__count-decrease" data-id="${card.articule}">-</button>
          <p class="cart__count-value" data-id="${card.articule}"></p>
          <button class="cart__count-increase" data-id="${card.articule}">+</button>
        </div>
        <p class="cart__final-price" data-id="${card.articule}"></p>
        <button class="cart__button-close" data-id="${card.articule}" aria-label="Удалить товар из корзины">
          <svg width="18" height="18">
            <use href="img/sprite_auto.svg#icon-cross"></use>
          </svg>
        </button>
    </li>`
    );
  }

  function createShoppingCartCountTemplate(card) {
    return `<span>${card.count}</span>`;
  }

  function createShoppingCartFinalPriceTemplate(card) {
    return `<span>${card.finalPrice.toLocaleString(`ru-RU`)} ₽</span>`;
  }

  class Cart {
    constructor(markups, utils) {
      this.createShoppingCartTemplate = markups.createShoppingCartTemplate;
      this.createShoppingCartCountTemplate = markups.createShoppingCartCountTemplate;
      this.createShoppingCartFinalPriceTemplate = markups.createShoppingCartFinalPriceTemplate;
      this.renderElement = utils.renderElement;
      this.deleteChildrenElements = utils.deleteChildrenElements;
    }

    renderCart(cartData, decreaseClickHandler, increaseClickHandler, closeClickHandler) {
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
            closeClickHandler(evt.currentTarget.dataset.id);
          });
        };

        const decreaseButtons = cartList.querySelectorAll(`.cart__count-decrease`);
        const increaseButtons = cartList.querySelectorAll(`.cart__count-increase`);
        const closeButtons = cartList.querySelectorAll(`.cart__button-close`);

        decreaseButtons.forEach((button) => {
          decreaseHandler(button);
        });

        increaseButtons.forEach((button) => {
          increaseHandler(button);
        });

        closeButtons.forEach((button) => {
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

      this.renderElement(finalPrice, this.createShoppingCartFinalPriceTemplate(data));
    }
  }

  const cart = new Cart(
    {
      createShoppingCartTemplate,
      createShoppingCartCountTemplate,
      createShoppingCartFinalPriceTemplate
    },
    {
      renderElement,
      deleteChildrenElements
    }
  );

  function createDiscountMessageTemplate() {
    return `<span class="discount__message">Упс, такого купона не существует :(</span>`;
  }

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

      if (message) {
        form.removeChild(message);
      }
    }
  }

  const promoCode = new PromoCode(
    {
      createDiscountMessageTemplate
    },
    {
      renderElement,
      deleteChildrenElements
    }
  );

  function createCartTotalPriceTemplate(totalPrice) {
    return `<span>Всего: ${totalPrice.toLocaleString(`ru-RU`)} ₽</span>`;
  }

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

  const totalPrice = new TotalPrice(
    {
      createCartTotalPriceTemplate
    },
    {
      renderElement,
      deleteChildrenElements
    }
  );

  class CartPresenter {
    constructor(state, shoppingCartView, cartView, promoCodeView, totalPriceView, popupView) {
      this.state = state;
      this.shoppingCartView = shoppingCartView;
      this.cartView = cartView;
      this.promoCodeView = promoCodeView;
      this.totalPriceView = totalPriceView;
      this.popupView = popupView;

      this.increaseClickHandler = this.increaseClickHandler.bind(this);
      this.decreaseClickHandler = this.decreaseClickHandler.bind(this);
      this.closeClickHandler = this.closeClickHandler.bind(this);
      this.removeClickHandler = this.removeClickHandler.bind(this);
      this.submitClickHandler = this.submitClickHandler.bind(this);
    }

    init() {
      this.shoppingCartView.removeShoppingCartValue();

      this.renderShoppingCartValue();

      this.renderCart();

      this.usePromoCode();

      this.renderShoppingCartTotalPrice();
    }

    renderCart() {
      this.cartView.renderCart(this.state.getCartFromLocalStorage(), this.decreaseClickHandler, this.increaseClickHandler, this.closeClickHandler);
    }

    renderShoppingCartValue() {
      this.shoppingCartView.renderShoppingCartValue(this.state.countGoodsInShoppingCart());
    }

    usePromoCode() {
      this.promoCodeView.usePromoCode(this.submitClickHandler);
    }

    renderShoppingCartTotalPrice() {
      this.totalPriceView.renderTotalPrice(this.state.getShoppingCartTotalPrice());
    }

    increaseClickHandler(id) {
      // увеличиваем значение count в state
      this.state.increaseCartCount(id);

      // перерисовываем count
      this.cartView.renderCartCount(this.state.shoppingCart[id]);

      // удаляем старое значение кол-ва товаров в корзине из view
      this.shoppingCartView.removeShoppingCartValue();

      // перерисовываем общее кол-во товаров в корзине
      this.renderShoppingCartValue();

      // перерисовываем final price
      this.cartView.renderCartFinalPrice(this.state.shoppingCart[id]);

      // перерисовываем total price
      this.renderShoppingCartTotalPrice();
    }

    decreaseClickHandler(id) {
      // уменьшаем значение count в state
      this.state.decreaseCartCount(id);

      // перерисовываем count
      this.cartView.renderCartCount(this.state.shoppingCart[id]);

      // удаляем старое значение кол-ва товаров в корзине из view
      this.shoppingCartView.removeShoppingCartValue();

      // перерисовываем общее кол-во товаров в корзине
      this.renderShoppingCartValue();

      // перерисовываем final price
      this.cartView.renderCartFinalPrice(this.state.shoppingCart[id]);

      // перерисовываем total price
      this.renderShoppingCartTotalPrice();

      if (this.state.shoppingCart[id].count === 1) {
        this.popupView.renderRemovePopup(this.state.shoppingCart[id], this.removeClickHandler);
      }
    }

    closeClickHandler(id) {
      this.popupView.renderRemovePopup(this.state.shoppingCart[id], this.removeClickHandler);
    }

    removeClickHandler(id) {
      // удаляем товар из shoppingCart в state
      this.state.deleteGoodFromShoppingCart(id);

      // удаляем старое значение кол-ва товаров в корзине из view
      this.shoppingCartView.removeShoppingCartValue();

      // перерисовываем общее кол-во товаров в корзине
      this.renderShoppingCartValue();

      // перерисовываем корзину товаров
      this.renderCart();

      // перерисовываем total price
      this.renderShoppingCartTotalPrice();
    }

    submitClickHandler(code) {
      // записываем введённый промо-код в state
      this.state.setUsersPromoCode(code);

      // проверяем промо-код; если не подходит - отрисовываем сообщение пользователю
      if (!this.state.validateUsersPromoCode()) {
        this.promoCodeView.renderMessage();
      } else {
        this.promoCodeView.removeMessage();
      }

      // перерисовываем total price с учетом скидки
      this.renderShoppingCartTotalPrice();
    }
  }

  const state = new State(catalogData);
  const catalogPresenter = new CatalogPresenter(state, catalogView, popup, shoppingCart, pagination, filters, sort);
  const cartPresenter = new CartPresenter(state, shoppingCart, cart, promoCode, totalPrice, popup);

  catalogPresenter.init();
  cartPresenter.init();

}());

//# sourceMappingURL=main.js.map
