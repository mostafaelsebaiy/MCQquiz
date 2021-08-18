import React, { createContext, useReducer } from 'react';
import GlobalReducer from '../reducers/global.reducer';

const initialState = {
  activeQuestion: 0,
  name: '',
  result: 0,
};

export const GlobalContext = createContext({});
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  function setActiveQuestion(activeQuestion) {
    dispatch({
      type: 'SET_ACTIVE_QUESTION',
      payload: { activeQuestion },
    });
  }

  function setResult(result) {
    dispatch({
      type: 'SET_RESULT',
      payload: { result },
    });
  }
  function setName(name) {
    dispatch({
      type: 'SET_NAME',
      payload: { name },
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        setActiveQuestion,
        setResult,
        setName,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
