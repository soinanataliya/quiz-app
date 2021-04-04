import { IQuestions } from ".";

export const IS_DATA_LOADING = 'IS_DATA_LOADING';
export const isDataLoadingAction = () => ({
  type: IS_DATA_LOADING,
});

export const SET_CURRENT_QUESTION = 'SET_CURRENT_QUESTION';
export const setCurrentQuestionAction = (number: number) => {
  return ({
    type: SET_CURRENT_QUESTION,
    payload: number,
  })
};

export const SET_QUESTIONS = 'SET_QUESTIONS';
export const setQuestions = (questions: Array<IQuestions>) => {
  return ({
    type: SET_QUESTIONS,
    payload: questions,
  })
};

export const SET_ERROR = 'SET_ERROR';
export const setError = () => {
  return ({
    type: SET_ERROR,
  })
};
