export const IS_DATA_LOADING = 'IS_DATA_LOADING';
export const isDataLoadingAction = () => ({
  type: IS_DATA_LOADING,
});

export const SET_CURRENT_QUESTION = 'SET_CURRENT_QUESTION';
export const setCurrentQuestionAction = (number: number) => {
  return ({
  type: SET_CURRENT_QUESTION,
  payload: number,
})};
