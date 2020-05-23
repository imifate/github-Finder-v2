import React, { useReducer } from 'react';
import AlertContext from '../alert/alertContext';
import AlertReducer from '../alert/alertReducer';
import { SHOW_ALERT, REMOVE_ALERT } from '../types';

// creating initial State

const AlertState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (msg, type) => {
    dispatch({
      type: SHOW_ALERT,
      payload: { msg, type },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 2000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
