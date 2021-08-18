// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_QUESTION':
      return {
        ...state,
        activeQuestion: action.payload.activeQuestion,
      };

    case 'SET_RESULT':
      return {
        ...state,
        result: action.payload.result,
      };
    case 'SET_NAME':
      return {
        ...state,
        name: action.payload.name,
      };

    default:
      return state;
  }
};
