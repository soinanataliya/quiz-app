import { IS_DATA_LOADING } from './actions';
import { IRootReducer, ActionType } from './types';

export const initialState: IRootReducer = {
  data: {
    currentQuestion: 0,
    questions: [
      {
        questionText: 'Быть или не быть?',
        answers:
          [
            {
              id: 1,
              text: 'Быть'
            },
            {
              id: 2,
              text: 'Не быть'
            },
            {
              id: 3,
              text: 'Вот в чем вопрос'
            }
          ]
      },
      {
        questionText: 'Кто автор строк "Белеет парус одинокий...?',
        answers:
          [
            {
              id: 1,
              text: 'Пушкин'
            },
            {
              id: 2,
              text: 'Лермонтов'
            },
            {
              id: 3,
              text: 'Тургенев'
            },
            {
              id: 3,
              text: 'Некрасов'
            }
          ]
      }
    ]
  },
};

const reducer = (
  state: IRootReducer = initialState,
  { type, payload }: ActionType,
) => {
  switch (type) {
    case IS_DATA_LOADING:
      return { ...state, isLoading: payload };

    default:
      return state;
  }
};

export default reducer;
