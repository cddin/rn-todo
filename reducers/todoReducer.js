import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    isLoading: false,
  },
  reducers: {
    setValue: (state, action) => {
      state.todos = action.payload;
    },
    add: (state, action) => {
      state?.todos.push({
        id: new Date().getTime(),
        title: action.payload,
        isDone: false,
      });
    },
    toggle: (state, action) => {
      state?.todos?.map((item) => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone;
        }
      });
    },
    delete: (state, action) => {
      const todos = state?.todos;
      for (i in todos) {
        if (todos[i].id === action.payload) {
          todos?.splice(i, 1);
        }
      }
    },
  },
});

export default todoSlice.reducer;
