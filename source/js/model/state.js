export class State {
  constructor(data) {
    this.catalogData = data;

    this.filters = {
      price: {
        min: null,
        max: null
      },
      type: [],
      strings: []
    };

    this.sort = {
      type: null,
      flow: null
    };

    this.shoppingCart = {};

    this.currentPage = 1;

    this.catalogItemsPerPage = 9;

    this.itemsOffset = 0;
  }

  addGoodsInShoppingCart(id) {
    const good = this.catalogData[id];
    const articule = good.articule;

    this.shoppingCart[articule] = good;

    localStorage.setItem(`shoppingCart`, JSON.stringify(this.shoppingCart));
  }

  getCartFromLocalStorage() {
    if (localStorage.getItem(`shoppingCart`)) {
      return JSON.parse(localStorage.getItem(`shoppingCart`));
    }
    return {};
  }

  countGoodsInShoppingCart() {
    return Object.keys(this.getCartFromLocalStorage()).length;
  }

  clearFilters() {
    this.filters.type.splice(0, this.filters.type.length);
    this.filters.strings.splice(0, this.filters.strings.length);
  }

  getTotalPagesCount() {
    const catalogItemsCount = Object.values(this.getSortedData()).length;

    return Math.ceil(catalogItemsCount / this.catalogItemsPerPage);
  }

  getCatalogDataPerPage() {
    if (this.sort.type || this.sort.flow) {
      return Object.values(this.getSortedData()).slice(this.itemsOffset, this.itemsOffset + this.catalogItemsPerPage);
    }

    return Object.values(this.getFilteredCatalogData()).slice(this.itemsOffset, this.itemsOffset + this.catalogItemsPerPage);
  }

  setCurrentPage(value) {
    this.currentPage = value;
  }

  setNextPage() {
    if (this.currentPage < this.getTotalPagesCount()) {
      this.currentPage++;
    }
  }

  getCurrentPage() {
    return this.currentPage;
  }

  setItemsOffset() {
    this.itemsOffset = (this.currentPage - 1) * this.catalogItemsPerPage;
  }

  getCatalogData() {
    return this.catalogData;
  }

  setFilters(objectData) {
    this.filters.price.min = objectData.priceMin;
    this.filters.price.max = objectData.priceMax;
    this.filters.type = objectData.type;
    this.filters.strings = objectData.strings;
    this.currentPage = 1;
    this.itemsOffset = 0;
  }

  getFilteredCatalogData() {
    const currentData = Object.values(this.catalogData);

    if (this.filters.price.min === null && this.filters.price.max === null && this.filters.type.length === 0 && this.filters.strings.length === 0) {
      return currentData;
    }

    const filteredData = currentData.filter((item) => {
      if (this.filters.price.min && item.price < this.filters.price.min) {
        return false;
      }

      if (this.filters.price.max && item.price > this.filters.price.max) {
        return false;
      }

      if (this.filters.type.length > 0 && !this.filters.type.includes(item.type)) {
        return false;
      }

      if (this.filters.strings.length > 0 && !this.filters.strings.includes(item.stringsNumber)) {
        return false;
      }

      return true;
    });

    return filteredData;
  }

  setSortType(value) {
    this.sort.type = value;
  }

  setSortFlow(value) {
    this.sort.flow = value;
  }

  getSortedData() {
    const catalogData = Object.values(this.getFilteredCatalogData());

    const flow = this.sort.flow || `up`;
    const type = this.sort.type || `by-price`;
    const sorted = catalogData.sort((a, b) => {
      if (type === `by-popularity`) {
        return a.popularity - b.popularity;
      }
      return parseInt(a.price, 10) - parseInt(b.price, 10);
    });

    return flow === `up` ? sorted : sorted.reverse();
  }
}