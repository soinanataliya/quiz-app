export interface IRootReducer {
    currentQuestion: number;
    questions: Array<IQuestions>;
};

export interface ActionType {
  type: string;
  payload?: any;
}

export interface IQuestions {
  questionText: string,
  answers: Array<IAnswer>;
};

export interface IAnswer {
  id: number,
  text: string | null;
}