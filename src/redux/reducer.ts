import {
  Actions,
} from './actions';
import { IRootReducer, ActionType } from './types';

export const initialState: IRootReducer = {
  currentQuestion: 0,
  questions: [],
  answers: {},
  isError: false,
  isDataLoading: true,
};

const reducer = (
  state: IRootReducer = initialState,
  { type, payload }: ActionType,
) => {
  switch (type) {
    case Actions.IS_DATA_LOADING:
      return { ...state, isDataLoading: payload };
    case Actions.SET_CURRENT_QUESTION:
      return { ...state, currentQuestion: payload };
    case Actions.SET_QUESTIONS:
      return { ...state, questions: payload };
    case Actions.SET_ERROR:
      return { ...state, isError: true };
    case Actions.SET_ANSWERS:
      return { ...state, answers: payload };
    default:
      return state;
  }
};

export default reducer;
