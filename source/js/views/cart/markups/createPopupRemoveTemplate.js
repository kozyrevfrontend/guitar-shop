export function createPopupRemoveTemplate(card) {
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
