export class Presenter {
  constructor(myState, myView) {
    this.state = myState;
    this.view = myView;

    this.paginationLinkClickHandler = this.paginationLinkClickHandler.bind(this);
    this.filtersFormSubmitHandler = this.filtersFormSubmitHandler.bind(this);
    this.sortByTypeHandler = this.sortByTypeHandler.bind(this);
    this.sortByFlowHandler = this.sortByFlowHandler.bind(this);
  }

  init() {
    this.renderCatalogPage();
  }

  renderCatalogPage() {
    this.view.renderCatalog(this.state.getCatalogDataPerPage());

    this.renderPaginationList();

    this.setFiltersFormSettings();

    this.setSortSettings();
  }

  renderPaginationList() {
    this.view.renderPaginationList(this.state.getTotalPagesCount(), this.paginationLinkClickHandler, this.state.getCurrentPage());
  }

  setFiltersFormSettings() {
    this.view.setFiltersFormSettings(this.filtersFormSubmitHandler);
  }

  setSortSettings() {
    this.view.setSortSettings(this.sortByTypeHandler, this.sortByFlowHandler);
  }

  paginationLinkClickHandler(page) {
    // обновляем текущую страницу в state
    this.state.setCurrentPage(page);

    // обновляем смещение элементов каталога в state
    this.state.setItemsOffset();

    // перерисовываем каталог
    this.view.renderCatalog(this.state.getCatalogDataPerPage());

    // перерисовываем пагинацию
    this.renderPaginationList();
  }

  filtersFormSubmitHandler(values) {
    // обновляем значения фильтров в state
    this.state.setFilters(values);

    // перерисовываем каталог
    this.view.renderCatalog(this.state.getCatalogDataPerPage());

    // перерисовываем пагинацию
    this.renderPaginationList();
  }

  sortByTypeHandler(type) {
    // обновляем значение типа сортировки в state
    this.state.setSortType(type);

    // перерисовываем каталог
    this.view.renderCatalog(this.state.getCatalogDataPerPage());

    // перерисовываем пагинацию
    this.renderPaginationList();
  }

  sortByFlowHandler(flow) {
    // обновляем значение направления сортировки в state
    this.state.setSortFlow(flow);

    // перерисовываем каталог
    this.view.renderCatalog(this.state.getCatalogDataPerPage());

    // перерисовываем пагинацию
    this.renderPaginationList();
  }
}