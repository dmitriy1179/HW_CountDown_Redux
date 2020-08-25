import { combineReducers } from "redux";

const initialState = {
  value: 0,
  isProcessing: true
};

const countDownReducer = (state = initialState, action) => {
  switch (action.type) {
    case "countdown/update":
      return {
        ...state,
        value: state.value + 1
    };
    case "countdown/start":
      return {
        ...state,
        isProcessing: true
    };
    case "countdown/stop":
      return {
        ...state,
        isProcessing: false
    };
    case "countdown/reset":
      return initialState;
        
    default:
      return state;
  };
};

export default combineReducers({ countDownReducer });