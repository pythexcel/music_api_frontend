import {
    DATA_STORAGE
  } from './Type';
  
  export const dataStorage = data => ({
    type: DATA_STORAGE,
    data: data,
  });
  
//   export const deleteTodo = key => ({
//     type: DELETE_TODO,
//     key: key,
//   });
//   export const editTodo = todo => ({
//     type: EDIT_TODO,
//     data: todo,
//   });
//   export const checkTodo = todo => ({
//     type: CHECK_TODO,
//     data: todo,
//   });
//   export const asynctStorageTodo = todo => ({
//     type: ASYNCSTORAGE_TODO,
//     data: todo,
//   });