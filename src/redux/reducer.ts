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
  isAnswersSending: false,
  result: undefined,
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
    case Actions.REMOVE_ERROR:
      return { ...state, isError: false };
    case Actions.SET_ANSWERS:
      return { ...state, answers: { ...state.answers, ...payload } };
    case Actions.IS_ANSWERS_SENDING:
      return { ...state, isAnswersSending: payload };
    case Actions.SET_RESULT:
      return { ...state, result: payload };
    default:
      return state;
  }
};

export default reducer;
