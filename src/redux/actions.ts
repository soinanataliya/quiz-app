import { dispatch } from "../config/store";
import { IQuestions, ResultType } from "./types";

export enum Actions {
  IS_DATA_LOADING = 'IS_DATA_LOADING',
  SET_CURRENT_QUESTION = 'SET_CURRENT_QUESTION',
  SET_QUESTIONS = 'SET_QUESTIONS',
  SET_ERROR = 'SET_ERROR',
  SET_ANSWERS = 'SET_ANSWERS',
  IS_ANSWERS_SENDING = 'IS_ANSWERS_SENDING',
  SET_RESULT = 'SET_RESULT',
  REMOVE_ERROR = 'REMOVE_ERROR',
};

export const setDataLoadingAction = (flag: boolean) => {
  dispatch({
    type: Actions.IS_DATA_LOADING,
    payload: flag,
  });
}

export const setCurrentQuestionAction = (number: number) => {
  dispatch({
    type: Actions.SET_CURRENT_QUESTION,
    payload: number,
  })
};

export const setQuestionsAction = (questions: Array<IQuestions>) => {
  dispatch({
    type: Actions.SET_QUESTIONS,
    payload: questions,
  })
};

export const setErrorAction = () => {
  dispatch({
    type: Actions.SET_ERROR,
  })
};

export const removeErrorAction = () => {
  dispatch({
    type: Actions.REMOVE_ERROR,
  })
};

export const setAnswersAction = (answer: { [key in number]?: number }) => {
  dispatch({
    type: Actions.SET_ANSWERS,
    payload: answer,
  })
};

export const isAnswersSendingAction = (flag: boolean) => {
  dispatch({
    type: Actions.IS_ANSWERS_SENDING,
    payload: flag,
  })
};

export const setResult = (result: ResultType) => {
  dispatch({
    type: Actions.SET_RESULT,
    payload: result,
  })
};
