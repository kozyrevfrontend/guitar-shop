export class Presenter {
  constructor(myState, myView) {
    this.state = myState;
    this.view = myView;

    this.paginationLinkClickHandler = this.paginationLinkClickHandler.bind(this);
    this.filtersFormSubmitHandler = this.filtersFormSubmitHandler.bind(this);
  }

  init() {
    this.renderCatalogPage();
  }

  renderCatalogPage() {
    this.view.renderCatalog(this.state.getCatalogDataPerPage());

    this.renderPaginationList();

    this.setFiltersFormSettings();
  }

  renderPaginationList() {
    this.view.renderPaginationList(this.state.getTotalPagesCount(), this.paginationLinkClickHandler, this.state.getCurrentPage());
  }

  setFiltersFormSettings() {
    this.view.setFiltersFormSettings(this.filtersFormSubmitHandler);
  }

  paginationLinkClickHandler(page) {
    this.state.setCurrentPage(page);

    this.state.setItemsOffset();

    this.view.renderCatalog(this.state.getCatalogDataPerPage());

    this.renderPaginationList();
  }

  filtersFormSubmitHandler(values) {
    this.state.setFilters(values);

    this.view.renderCatalog(this.state.getCatalogDataPerPage());

    this.renderPaginationList();
  }
}
