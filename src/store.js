import { createAction, createReducer } from '@reduxjs/toolkit';
import { createStore } from "redux";

// const ADD = 'ADD';
// const DELETE = 'DELETE';

// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text
//   };
// };
// const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id: Number(id)
//   };
// };

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// const reducer = (state = [], action) => {

//   switch (action.type) {
//     case addToDo.type:
//       console.log(action);
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter(toDo => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// }

// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [deleteToDo]: (state, action) => (
//     state.filter(toDo => toDo.id !== action.payload)
//   )
// });

const reducer = createReducer([], (builder) => {
  builder
    .addCase(addToDo, (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    })
    .addCase(deleteToDo, (state, action) =>
      state.filter(toDo => toDo.id !== action.payload)
    )
})

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo
}

export default store;