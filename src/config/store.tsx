import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../redux/index';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)),
);
