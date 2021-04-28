import { isAnswersSendingAction, setAnswersAction, setCurrentQuestionAction, setDataLoadingAction, setErrorAction, setQuestionsAction, } from "./actions"

export const getQuestions = async () => {
  setDataLoadingAction(true);
  await fetch('http://localhost:5000/questions', {
    method: 'GET'
  }).then((resp) => {
    resp.text().then((result) => {
      const questions = JSON.parse(result);
      setQuestionsAction(questions);

    });
  }).catch((error) => {
    setErrorAction();
    console.error(error);
  }).finally(() => {
    setDataLoadingAction(false);
  })
}

export const sendAnswers = async () => {
  isAnswersSendingAction(true);
  await fetch('http://localhost:5000/questions', {
    method: 'POST'
  }).then((resp) => {
    resp.text().then((result) => {
      console.log(resp)
    });
  }).catch((error) => {
    setErrorAction();
    console.error(error);
  }).finally(() => {
    isAnswersSendingAction(false);
  })
}

export const getToNextQuestion = (answer: { [key: number]: number | null }, currQuestion: number) => {
  setAnswersAction(answer);
  setCurrentQuestionAction(currQuestion + 1);
};