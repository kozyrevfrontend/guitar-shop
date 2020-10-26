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

export const view = new View();
