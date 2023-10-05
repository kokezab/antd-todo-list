import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchTodos } from './todosApi';

const initialState = [
  { id: 1, text: 'Learn React', completed: true },
  { id: 2, text: 'Learn Redux', completed: false },
];

export const fetchTodosAsync = createAsyncThunk(
  'todos/fetchTodos',
  async () => {
    const data = await fetchTodos();
    return data;
  }
);

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodosAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default todosSlice.reducer;

export const selectTodos = (state) => state.todos;
