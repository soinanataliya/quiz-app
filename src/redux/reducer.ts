import {
  IS_DATA_LOADING,
  SET_CURRENT_QUESTION,
  SET_QUESTIONS,
  SET_ERROR,
} from './actions';
import { IRootReducer, ActionType } from './types';

export const initialState: IRootReducer = {
  currentQuestion: 0,
  questions: [],
  isError: false,
  isDataLoading: true,
};

const reducer = (
  state: IRootReducer = initialState,
  { type, payload }: ActionType,
) => {
  switch (type) {
    case IS_DATA_LOADING:
      return { ...state, isDataLoading: payload };
    case SET_CURRENT_QUESTION:
      return { ...state, currentQuestion: payload };
    case SET_QUESTIONS:
      return { ...state, questions: payload };
    case SET_ERROR:
      return { ...state, isError: true };
    default:
      return state;
  }
};

export default reducer;
