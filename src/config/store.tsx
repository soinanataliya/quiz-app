import { AnyAction, applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../redux/index';
import { initialState } from '../redux/reducer';

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

export const store = createStore(
  rootReducer,
  initialState,
  enhancer,
);

export const dispatch = (command: AnyAction) => {
  if (!store) {
    throw Error('Store is not initialized');
  }

  store.dispatch(command);
}