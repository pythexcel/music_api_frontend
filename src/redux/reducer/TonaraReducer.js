import {
    DATA_STORAGE
  } from '../action/Type';
  
  const initialState = {
    dataStorage: [],
  };
  
  const TonaraReducer = (state = initialState, action) => {
    switch (action.type) {
    //   case ADD_TODO:
    //     return {
    //       ...state,
    //       todoList: state.todoList.concat(action.data),
    //     };
    //   case DELETE_TODO:
    //     return {
    //       ...state,
    //       todoList: state.todoList.filter(item => item.key !== action.key),
    //     };
    //   case EDIT_TODO:
    //     state.todoList = action.data;
    //     return {
    //       ...state,
    //     };
    //   case CHECK_TODO:
    //     state.todoList = action.data;
    //     return {
    //       ...state,
    //     };
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