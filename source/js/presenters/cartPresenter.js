export class CartPresenter {
  constructor(state, cartView) {
    this.state = state;
    this.cartView = cartView;
  }

  init() {
    this.renderCart();
  }

  renderCart() {
    this.cartView.renderCart(this.state.getCartFromLocalStorage());
  }
}
