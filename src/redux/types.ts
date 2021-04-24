export interface IRootReducer {
    currentQuestion: number;
    questions: Array<IQuestions>;
    isError: boolean;
    isDataLoading: boolean;
    answers: {
      [key: number]: number;
    }
};

export interface ActionType {
  type: string;
  payload?: any;
}

export interface IQuestions {
  questionText: string,
  answers: Array<IAnswer>;
  id: number;
};

export interface IAnswer {
  id: number | null,
  text: string | null;
}