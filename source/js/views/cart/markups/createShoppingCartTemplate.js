export function createShoppingCartTemplate(card) {
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
      <p class="cart__catalog-price">${card.price} ₽</p>
        <div class="cart__count">
          <button class="cart__count-decrease">-</button>
          <p class="cart__count-value"><span>1</span></p>
          <button class="cart__count-increase">+</button>
        </div>
        <p class="cart__final-price">${card.price} ₽</p>
        <button class="cart__button-close" aria-label="Удалить товар из корзины">
          <svg width="18" height="18">
            <use href="img/sprite_auto.svg#icon-cross"></use>
          </svg>
        </button>
    </li>`
  );
}
