import { dispatch } from "../config/store"
import { Actions } from "./actions"

export const getQuestions = async () => {
  dispatch({
    type: Actions.IS_DATA_LOADING,
    payload: true,
  });
  await fetch('http://localhost:5000/questions').then((resp) => {
    resp.text().then((result) => {
      const questions = JSON.parse(result);
      dispatch({
        type: Actions.SET_QUESTIONS,
        payload: questions,
      });

    });
  }).catch((error) => {
    dispatch({
      type: Actions.SET_ERROR,
    });
    console.error(error);
  }).finally(() => {
    dispatch({
      type: Actions.IS_DATA_LOADING,
      payload: false,
    });
  })
}