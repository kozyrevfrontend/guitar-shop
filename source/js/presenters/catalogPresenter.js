export class CatalogPresenter {
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
