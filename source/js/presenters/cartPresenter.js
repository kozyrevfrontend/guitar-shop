export class CartPresenter {
  constructor(state, shoppingCartView, cartView, promoCodeView, totalPriceView) {
    this.state = state;
    this.shoppingCartView = shoppingCartView;
    this.cartView = cartView;
    this.promoCodeView = promoCodeView;
    this.totalPriceView = totalPriceView;

    this.increaseClickHandler = this.increaseClickHandler.bind(this);
    this.decreaseClickHandler = this.decreaseClickHandler.bind(this);
    this.deleteClickHandler = this.deleteClickHandler.bind(this);
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
    this.cartView.renderCart(this.state.getCartFromLocalStorage(), this.decreaseClickHandler, this.increaseClickHandler, this.deleteClickHandler);
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
  }

  deleteClickHandler(id) {
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
      console.log(`Такого промокода не существует!`);
    }

    // перерисовываем total price с учетом скидки
    this.renderShoppingCartTotalPrice();
  }
}
