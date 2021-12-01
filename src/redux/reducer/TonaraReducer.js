import {
  DATA_STORAGE,
  ADD_DATA
} from '../action/Type';

const initialState = {
  dataStorage: [],
};

const TonaraReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_STORAGE:
      state.dataStorage = action.data;
      return {
        ...state,
      };
    case ADD_DATA:
      return {
        ...state,
        dataStorage: state.dataStorage.concat(action.data),

      };
    default:
      return state;
  }
};

export default TonaraReducer;