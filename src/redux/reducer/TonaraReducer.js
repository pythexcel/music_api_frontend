import {
    DATA_STORAGE
  } from '../action/Type';
  
  const initialState = {
    dataStorage: [],
  };
  
  const TonaraReducer = (state = initialState, action) => {
    switch (action.type) {
      case DATA_STORAGE :
        state.dataStorage = action.data;
        return {
          ...state,
        };
      default:
        return state;
    }
  };
  
  export default TonaraReducer;