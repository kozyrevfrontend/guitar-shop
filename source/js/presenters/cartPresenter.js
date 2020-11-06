export class CartPresenter {
  constructor(state, shoppingCartView, cartView, totalPriceView) {
    this.state = state;
    this.shoppingCartView = shoppingCartView;
    this.cartView = cartView;
    this.totalPriceView = totalPriceView;

    this.increaseClickHandler = this.increaseClickHandler.bind(this);
    this.decreaseClickHandler = this.decreaseClickHandler.bind(this);
    this.deleteClickHandler = this.deleteClickHandler.bind(this);
  }

  init() {
    this.shoppingCartView.removeShoppingCartValue();

    this.renderShoppingCartValue();

    this.renderCart();

    this.renderShoppingCartTotalPrice();
  }

  renderCart() {
    this.cartView.renderCart(this.state.getCartFromLocalStorage(), this.decreaseClickHandler, this.increaseClickHandler, this.deleteClickHandler);
  }

  renderShoppingCartValue() {
    this.shoppingCartView.renderShoppingCartValue(this.state.countGoodsInShoppingCart());
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
  }
}
