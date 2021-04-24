import { IQuestions } from "./types";

export enum Actions {
  IS_DATA_LOADING = 'IS_DATA_LOADING',
  SET_CURRENT_QUESTION = 'SET_CURRENT_QUESTION',
  SET_QUESTIONS = 'SET_QUESTIONS',
  SET_ERROR = 'SET_ERROR',
  SET_ANSWERS = 'SET_ANSWERS',
};

export const isDataLoadingAction = () => ({
  type: Actions.IS_DATA_LOADING,
});

export const setCurrentQuestionAction = (number: number) => {
  return ({
    type: Actions.SET_CURRENT_QUESTION,
    payload: number,
  })
};

export const setQuestionsAction = (questions: Array<IQuestions>) => {
  return ({
    type: Actions.SET_QUESTIONS,
    payload: questions,
  })
};

export const setErrorAction = () => {
  return ({
    type: Actions.SET_ERROR,
  })
};


export const setAnswersAction = (answer: { [key: number]: number }) => {
  return ({
    type: Actions.SET_ANSWERS,
    payload: answer,
  })
};