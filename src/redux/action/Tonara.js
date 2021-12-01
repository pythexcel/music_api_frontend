import {
  DATA_STORAGE,
  ADD_DATA
} from './Type';

export const dataStorage = data => ({
  type: DATA_STORAGE,
  data: data,
});
export const addData = data => ({
  type: ADD_DATA,
  data: data,
});

