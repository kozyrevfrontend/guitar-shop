import { catalog } from './components/catalog';
import { State } from './components/state';
import { View } from './components/view';
import { Presenter } from './components/presenter';

const state = new State(catalog);
const view = new View();
const presenter = new Presenter(state, view);

presenter.init();
