import { dispatch } from "../config/store"
import { IS_DATA_LOADING, SET_QUESTIONS, SET_ERROR } from "./actions"

export const getQuestions = async () => {
  dispatch({
    type: IS_DATA_LOADING,
    payload: true,
  });
  await fetch('http://localhost:5000/questions').then((resp) => {
    resp.text().then((result) => {
      const questions = JSON.parse(result);
      dispatch({
        type: SET_QUESTIONS,
        payload: questions,
      });

    });
  }).catch((error) => {
    dispatch({
      type: SET_ERROR,
    });
    console.error(error);
  }).finally(() => {
    dispatch({
      type: IS_DATA_LOADING,
      payload: false,
    });
  })
}