export interface IRootReducer {
  data: {
    currentQuestion: number;
    questions: Array<IQuestions>;
  };
};

export interface ActionType {
  type: string;
  payload?: any;
}

interface IQuestions {
  questionText: string,
  answers: Array<IAnswer>;
};

export interface IAnswer {
  id: number,
  text: string;
}