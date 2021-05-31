export interface IRootReducer {
    currentQuestion: number;
    questions: Array<IQuestions>;
    isError: boolean;
    isDataLoading: boolean;
    isAnswersSending: boolean;
    answers: IAnswers;
    result: ResultType;
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
  id?: number,
  text?: string;
}

export interface IAnswers {
  [key: number]: number;
}

export type ResultType = boolean | undefined;
