import { AnyAction, applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../redux/index';
import { initialState } from '../redux/reducer';

let store: any;

const configureStore = () => {
  const composeEnhancers =
    typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(thunk),
  );
  store = createStore(
    rootReducer,
    initialState,
    enhancer,
  );
  return store;
}

export const dispatch = (command: AnyAction) => {
  if (!store) {
    throw Error('Store is not initialized');
  }

  store.dispatch(command);
}

export default configureStore;