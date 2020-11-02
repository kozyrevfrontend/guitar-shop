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

  renderElement(parentElement, template, place = `beforeEnd`) {
    parentElement.insertAdjacentHTML(place, template);
  }

  deleteChildrenElements(list) {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
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

  createAddPopupTemplate(card) {
    return (
      `<div class="popup-add">
        <div class="popup-add__overlay">
          <section class="popup-add__add">
            <h2 class="popup-add__add-title">Добавить товар в корзину</h2>
            <div class="popup-add__add-wrapper">
              <picture>
                <source type="image/webp" srcset="img/${card.image}@1x.webp 1x, img/${card.image}@2x.webp 2x">
                <img src="img/${card.image}@1x.png" srcset="img/${card.image}@1x.png 2x" alt="${card.model}" width="56" height="128">
              </picture>
              <div class="popup-add__add-description">
                <h3 class="popup-add__add-model">Гитара ${card.model}</h3>
                <p class="popup-add__add-articule">Артикул: ${card.articule}</p>
                <p class="popup-add__add-type">${card.type}, ${card.stringsNumber} струнная </p>
                <p class="popup-add__add-price">Цена: ${card.price.toLocaleString(`ru-RU`)} ₽</p>
              </div>
              <button class="popup-add__add-button" data-id="${card.articule}">Добавить в корзину</button>
              <button class="popup-add__add-close" aria-label="Закрыть попап">
                <svg width="18" height="18">
                  <use href="img/sprite_auto.svg#icon-cross"></use>
                </svg>
              </button>
            </div>
          </section>
        </div>
      </div>`
    );
  }

  renderAddPopup(card, addButtonClickHandler) {
    this.renderElement(document.body, this.createAddPopupTemplate(card));

    const popup = document.querySelector(`.popup-add`);
    const closeButton = popup.querySelector(`.popup-add__add-close`);
    const popupOverlay = popup.querySelector(`.popup-add__overlay`);
    const addButton = popup.querySelector(`.popup-add__add-button`);

    const closePopup = () => {
      document.body.removeChild(popup);
      document.removeEventListener(`keydown`, closePopupEscPress);
    };

    const closePopupEscPress = (evt) => {
      if (evt.key === `Escape`) {
        closePopup();
      }
    };

    closeButton.addEventListener('click', () => {
      closePopup();
    });

    document.addEventListener(`keydown`, closePopupEscPress);

    popupOverlay.addEventListener(`click`, (evt) => {
      if (evt.target === popupOverlay) {
        closePopup();
      }
    });

    addButton.addEventListener(`click`, (evt) => {
      addButtonClickHandler(evt.currentTarget.dataset.id);
      closePopup();
      this.renderSuccessPopup();
    });
  }

  createShoppingCartValueTemplate(value) {
    return `<span class="user-menu__value">${value}</span>`;
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

  createSuccessPopupTemplate() {
    return (
      `<div class="popup-success">
        <div class="popup-success__overlay">
          <div class="popup-success__body">
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
          </div>
        </div>
      </div>`
    );
  }

  renderSuccessPopup() {
    this.renderElement(document.body, this.createSuccessPopupTemplate());

    const popup = document.querySelector(`.popup-success`);
    const closeButton = popup.querySelector(`.popup-success__close`);
    const popupOverlay = popup.querySelector(`.popup-success__overlay`);
    const continueButton = popup.querySelector(`.popup-success__continue`);
    const openBagButton = popup.querySelector(`.popup-success__open-bag`);

    const closePopup = () => {
      document.body.removeChild(popup);
      document.removeEventListener(`keydown`, closePopupEscPress);
    };

    const closePopupEscPress = (evt) => {
      if (evt.key === `Escape`) {
        closePopup();
      }
    };

    closeButton.addEventListener('click', () => {
      closePopup();
    });

    document.addEventListener(`keydown`, closePopupEscPress);

    popupOverlay.addEventListener(`click`, (evt) => {
      if (evt.target === popupOverlay) {
        closePopup();
      }
    });

    continueButton.addEventListener(`click`, () => {
      closePopup();
    });

    openBagButton.addEventListener(`click`, () => {
      closePopup();
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

  renderPaginationForward(parentElement, template, place = `beforeEnd`) {
    parentElement.insertAdjacentHTML(place, template);
  }

  renderPaginationList(totalPages, clickHandler, currentPage, forwardClickHandler) {
    const paginationList = document.querySelector(`.pagination__list`);

    if (paginationList) {
      this.deleteChildrenElements(paginationList);

      for (let count = 1; count <= totalPages; count++) {
        this.renderElement(paginationList, this.createPaginationItemTemplate(count));
      }

      if (totalPages > 1) {
        this.renderPaginationForward(paginationList, this.createPaginationForwardTemplate());

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
