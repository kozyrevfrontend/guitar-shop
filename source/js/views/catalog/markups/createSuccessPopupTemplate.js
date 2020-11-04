export function createSuccessPopupTemplate() {
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
