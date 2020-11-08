export function createAddPopupTemplate(card) {
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
