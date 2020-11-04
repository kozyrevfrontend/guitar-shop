import { catalogData } from './model/catalogData';
import { State } from './model/state';
import { catalogView } from './views/catalog/catalog';
import { popup } from './views/popup';
import { shoppingCart } from './views/shoppingCart';
import { pagination } from './views/catalog/pagination';
import { filters } from './views/catalog/filters';
import { sort } from './views/catalog/sort';
import { CatalogPresenter } from './presenters/catalogPresenter';

const state = new State(catalogData);
const catalogPresenter = new CatalogPresenter(state, catalogView, popup, shoppingCart, pagination, filters, sort);

catalogPresenter.init();
