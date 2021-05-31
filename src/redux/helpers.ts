import { IAnswers } from ".";
import { isAnswersSendingAction, removeErrorAction, setAnswersAction, setCurrentQuestionAction, setDataLoadingAction, setErrorAction, setQuestionsAction, setResult, } from "./actions"

export const getQuestions = async () => {
  setDataLoadingAction(true);
  setCurrentQuestionAction(0);
  setAnswersAction({});
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

export const sendAnswers = async (answers: IAnswers) => {
  isAnswersSendingAction(true);
  await fetch('http://localhost:5000/questions', {
    method: 'POST',
    body: JSON.stringify(answers),
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((resp) => {
    resp.text().then((result) => {
      const res = JSON.parse(result);
      setResult(res.result);
    });
  }).catch((error) => {
    setErrorAction();
    console.error(error);
  }).finally(() => {
    isAnswersSendingAction(false);
  })
}

export const getToNextQuestion = (answer: { [key in number]?: number }, currQuestion: number) => {
  setAnswersAction(answer);
  setCurrentQuestionAction(currQuestion + 1);
};

export const resetApp = () => {
  removeErrorAction();
  getQuestions();
}