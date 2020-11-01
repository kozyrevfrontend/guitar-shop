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

  getTotalPagesCount() {
    let dataObject = {};

    if (this.getSortedData().length > 0) {
      dataObject = this.getSortedData();
    } else {
      dataObject = this.getFilteredCatalogData();
    }

    const catalogItemsCount = Object.values(dataObject).length;

    return Math.ceil(catalogItemsCount / this.catalogItemsPerPage);
  }

  getCatalogDataPerPage() {
    let dataObject = {};

    if (this.getSortedData().length > 0) {
      dataObject = this.getSortedData();
    } else {
      dataObject = this.getFilteredCatalogData();
    }

    return Object.values(dataObject).slice(this.itemsOffset, this.itemsOffset + this.catalogItemsPerPage);
  }

  setCurrentPage(value) {
    this.currentPage = value;
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
    let dataObject = {};

    if (this.getFilteredCatalogData().length > 0) {
      dataObject = this.getFilteredCatalogData();
    } else {
      dataObject = this.getCatalogData();
    }

    const catalogData = Object.values(dataObject);

    return catalogData.sort((a, b) => {
      if (this.sort.flow === `down` && this.sort.type === `by-price`) {
        return parseInt(b.price, 10) - parseInt(a.price, 10);
      } else if (this.sort.flow === `up` && this.sort.type === `by-popularity`) {
        return a.popularity - b.popularity;
      } else if (this.sort.flow === `down` && this.sort.type === `by-popularity`) {
        return b.popularity - a.popularity;
      } else if (this.sort.flow === `up` && this.sort.type === `by-price`) {
        return parseInt(a.price, 10) - parseInt(b.price, 10);
      } else if (this.sort.flow === `up` && this.sort.type === ``) {
        return parseInt(a.price, 10) - parseInt(b.price, 10);
      } else if (this.sort.flow === `down` && this.sort.type === ``) {
        return parseInt(b.price, 10) - parseInt(a.price, 10);
      } else if (this.sort.flow === `` && this.sort.type === `by-price`) {
        return parseInt(a.price, 10) - parseInt(b.price, 10);
      } else if (this.sort.flow === `` && this.sort.type === `by-popularity`) {
        return a.popularity - b.popularity;
      } else {
        return catalogData;
      }
    });
  }
}
