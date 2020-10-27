import { state } from './components/state';
import { view } from './components/view';

// Отрисовываем каталог всех товаров
const catalogList = document.querySelector(`.catalog__list`);
state.getCatalogDataPerPage(state.getCatalogData()).forEach((item) => {
  view.renderCard(catalogList, view.createCatalogItemTemplate(item));
});

// Отрисовываем стартовую пагинацию из расчета всех товаров в каталоге
const paginationList = document.querySelector(`.pagination__list`);

for (let count = 1; count <= state.getTotalPagesCount(state.getCatalogData()); count++) {
  view.renderPagination(paginationList, view.createPaginationItemTemplate(count));
}

// Если страниц больше одной, отрисовываем кнопку далее
if (state.getTotalPagesCount(state.getCatalogData()) > 1) {
  view.renderPaginationForward(paginationList, view.createPaginationForwardTemplate());
}

// На все элементы пагинации вешаем обратотчики события
const paginationLinks = document.querySelectorAll(`.pagination__link`);

const paginationLinkClickHandler = (evt) => {
  evt.preventDefault();

  state.setCurrentPage(parseInt(evt.target.textContent, 10));

  state.setItemsOffset();

  view.deleteChildrenElements(catalogList);

  state.getCatalogDataPerPage(state.getCatalogData()).forEach((item) => {
    view.renderCard(catalogList, view.createCatalogItemTemplate(item));
  });
};

paginationLinks.forEach((link) => {
  link.addEventListener(`click`, paginationLinkClickHandler);
});

// Программируем логику работы фильтров
const filtersForm = document.querySelector(`.filters__form`);
filtersForm.addEventListener(`submit`, (evt) => {
  evt.preventDefault();

  // обнуляем предыдущие значения фильтров
  state.clearFilters();

  const formData = new FormData(evt.target);

  // записываем выбранные пользователем значения фильтров в store
  if (formData.get(`price-min`)) {
    state.setFiltersPriceMin(formData.get(`price-min`));
  } else {
    state.setFiltersPriceMin(`1000`);
  }

  if (formData.get(`price-max`)) {
    state.setFiltersPriceMax(formData.get(`price-max`));
  } else {
    state.setFiltersPriceMax(`30000`);
  }

  if (formData.get(`acoustic`)) {
    state.setFiltersType(`акустическая гитара`);
  }

  if (formData.get(`electro`)) {
    state.setFiltersType(`электрогитара`);
  }

  if (formData.get(`ukulele`)) {
    state.setFiltersType(`укулеле`);
  }

  if (!formData.get(`acoustic`) && !formData.get(`electro`) && !formData.get(`ukulele`)) {
    state.setFiltersType(`акустическая гитара`);
    state.setFiltersType(`электрогитара`);
    state.setFiltersType(`укулеле`);
  }

  if (formData.get(`four-strings`)) {
    state.setFiltersStrings(4);
  }

  if (formData.get(`six-strings`)) {
    state.setFiltersStrings(6);
  }

  if (formData.get(`seven-strings`)) {
    state.setFiltersStrings(7);
  }

  if (formData.get(`twelve-strings`)) {
    state.setFiltersStrings(12);
  }

  if (!formData.get(`four-strings`) && !formData.get(`six-strings`) && !formData.get(`seven-strings`) && !formData.get(`twelve-strings`)) {
    state.setFiltersStrings(4);
    state.setFiltersStrings(6);
    state.setFiltersStrings(7);
    state.setFiltersStrings(12);
  }

  // получаем отфильтрованный массив из каталога
  const filteredData = state.getFilteredCatalogData();

  // очищаем текущий каталог
  view.deleteChildrenElements(catalogList);

  // отрисовываем каталог по отфильтрованным данным
  state.getCatalogDataPerPage(filteredData).forEach((item) => {
    view.renderCard(catalogList, view.createCatalogItemTemplate(item));
  });

  // очищаем текущую пагинацию
  view.deleteChildrenElements(paginationList);

  // отрисовываем пагинацию исходя из пересчитанных страниц в каталоге
  for (let count = 1; count <= state.getTotalPagesCount(filteredData); count++) {
    view.renderPagination(paginationList, view.createPaginationItemTemplate(count));
  }

  if (state.getTotalPagesCount(filteredData) > 1) {
    view.renderPaginationForward(paginationList, view.createPaginationForwardTemplate());
  }
});

// СОРТИРОВКА
// записываем введенные пользователем параметры сортировки в store
const sortByPriceButton = document.querySelector(`#sort-by-price`);
sortByPriceButton.addEventListener(`click`, () => {
  state.setSortType(`by-price`);

  let sortedData = [];

  // проверяем, есть ли уже отфильтрованные данные
  if (state.getFilteredCatalogData().length > 0) {
    sortedData = state.getDataSortedByPrice(state.getFilteredCatalogData());
  } else {
    sortedData = state.getDataSortedByPrice(state.getCatalogData());
  }

  // очищаем текущий каталог
  view.deleteChildrenElements(catalogList);

  // отрисовываем каталог по отфильтрованным данным
  state.getCatalogDataPerPage(sortedData).forEach((item) => {
    view.renderCard(catalogList, view.createCatalogItemTemplate(item));
  });
});

const sortByPopularityButton = document.querySelector(`#sort-by-popularity`);
sortByPopularityButton.addEventListener(`click`, () => {
  state.setSortType(`by-popularity`);

  let sortedData = [];

  // проверяем, есть ли уже отфильтрованные данные
  if (state.getFilteredCatalogData().length > 0) {
    sortedData = state.getDataSortedByPopularity(state.getFilteredCatalogData());
  } else {
    sortedData = state.getDataSortedByPopularity(state.getCatalogData());
  }

  // очищаем текущий каталог
  view.deleteChildrenElements(catalogList);

  // отрисовываем каталог по отфильтрованным данным
  state.getCatalogDataPerPage(sortedData).forEach((item) => {
    view.renderCard(catalogList, view.createCatalogItemTemplate(item));
  });
});

const sortFlowUpButton = document.querySelector(`#sort-flow-up`);
sortFlowUpButton.addEventListener(`click`, () => {
  state.setSortFlow(`up`);

  let sortedData = [];

  // проверяем, есть ли уже отфильтрованные данные, проверяем тип сортировки
  if (state.sort.type === `by-price` && state.getFilteredCatalogData().length > 0) {
    sortedData = state.getDataSortedByPrice(state.getFilteredCatalogData());
  } else if (state.sort.type === `by-price` && state.getFilteredCatalogData().length === 0) {
    sortedData = state.getDataSortedByPrice(state.getCatalogData());
  } else if (state.sort.type === `by-popularity` && state.getFilteredCatalogData().length > 0) {
    sortedData = state.getDataSortedByPopularity(state.getFilteredCatalogData());
  } else if (state.sort.type === `by-popularity` && state.getFilteredCatalogData().length === 0) {
    sortedData = state.getDataSortedByPopularity(state.getCatalogData());
  }

  // очищаем текущий каталог
  view.deleteChildrenElements(catalogList);

  // отрисовываем каталог по отфильтрованным данным
  state.getCatalogDataPerPage(sortedData).forEach((item) => {
    view.renderCard(catalogList, view.createCatalogItemTemplate(item));
  });
});

const sortFlowDownButton = document.querySelector(`#sort-flow-down`);
sortFlowDownButton.addEventListener(`click`, () => {
  state.setSortFlow(`down`);

  let sortedData = [];

  // проверяем, есть ли уже отфильтрованные данные, проверяем тип сортировки
  if (state.sort.type === `by-price` && state.getFilteredCatalogData().length > 0) {
    sortedData = state.getDataSortedByPrice(state.getFilteredCatalogData());
  } else if (state.sort.type === `by-price` && state.getFilteredCatalogData().length === 0) {
    sortedData = state.getDataSortedByPrice(state.getCatalogData());
  } else if (state.sort.type === `by-popularity` && state.getFilteredCatalogData().length > 0) {
    sortedData = state.getDataSortedByPopularity(state.getFilteredCatalogData());
  } else if (state.sort.type === `by-popularity` && state.getFilteredCatalogData().length === 0) {
    sortedData = state.getDataSortedByPopularity(state.getCatalogData());
  }

  // очищаем текущий каталог
  view.deleteChildrenElements(catalogList);

  // отрисовываем каталог по отфильтрованным данным
  state.getCatalogDataPerPage(sortedData).forEach((item) => {
    view.renderCard(catalogList, view.createCatalogItemTemplate(item));
  });
});
