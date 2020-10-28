import { catalog } from './catalog';

class State {
  constructor(data) {
    this.catalogData = data;

    this.filters = {
      price: {
        min: `1000`,
        max: `30000`
      },
      type: [],
      strings: []
    };

    this.sort = {
      type: ``,
      flow: ``
    };

    this.currentPage = 1;

    this.catalogItemsPerPage = 9;

    this.itemsOffset = 0;
  }

  clearFilters() {
    this.filters.type.splice(0, this.filters.type.length);
    this.filters.strings.splice(0, this.filters.strings.length);
  }

  getTotalPagesCount(dataObject) {
    const catalogItemsCount = Object.values(dataObject).length;

    return Math.ceil(catalogItemsCount / this.catalogItemsPerPage);
  }

  getCatalogDataPerPage(dataObject) {
    return Object.values(dataObject).slice(this.itemsOffset, this.itemsOffset + this.catalogItemsPerPage);
  }

  setCurrentPage(value) {
    this.currentPage = value;
  }

  setItemsOffset() {
    this.itemsOffset = (this.currentPage - 1) * this.catalogItemsPerPage;
  }

  getCatalogData() {
    return this.catalogData;
  }

  setFiltersPriceMin(value) {
    this.filters.price.min = value;
  }

  setFiltersPriceMax(value) {
    this.filters.price.max = value;
  }

  setFiltersType(value) {
    this.filters.type.push(value);
  }

  setFiltersStrings(value) {
    this.filters.strings.push(value);
  }

  getFilteredCatalogData() {
    const currentData = Object.values(this.catalogData);

    const filteredData = currentData.filter((item) => {
      if (parseInt(item.price, 10) < parseInt(this.filters.price.min, 10) || parseInt(item.price, 10) > parseInt(this.filters.price.max, 10)) {
        return false;
      }

      if (!this.filters.type.includes(item.type)) {
        return false;
      }

      if (!this.filters.strings.includes(item.stringsNumber)) {
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

  getDataSortedByPrice(dataObject) {
    const catalogData = Object.values(dataObject);

    return catalogData.sort((a, b) => {
      if (this.sort.flow === `down`) {
        return parseInt(b.price, 10) - parseInt(a.price, 10);
      } else {
        return parseInt(a.price, 10) - parseInt(b.price, 10);
      }
    });
  }

  getDataSortedByPopularity(dataObject) {
    const catalogData = Object.values(dataObject);

    return catalogData.sort((a, b) => {
      if (this.sort.flow === `down`) {
        return b.popularity - a.popularity;
      } else {
        return a.popularity - b.popularity;
      }
    });
  }
}

export const state = new State(catalog);
