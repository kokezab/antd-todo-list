import { configureStore } from '@reduxjs/toolkit';

import todos from './features/todosSlice';

const store = configureStore({
  reducer: {
    todos
  },
});

export default store;
