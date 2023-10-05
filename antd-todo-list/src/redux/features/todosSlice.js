import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, text: 'Learn React', completed: true },
  { id: 2, text: 'Learn Redux', completed: false },
];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
});

export default todosSlice.reducer;

export const selectTodos = state => state.todos;
