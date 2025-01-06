import { createSlice } from "@reduxjs/toolkit";

export type TodoType = {
  id: number;
  title: string;
  price: number;
};
interface TodoState {
  todos: TodoType[];
}

const initial = [
  { id: 1, title: "apple", price: 20 },
  { id: 2, title: "mango", price: 50 },
];
const initialState: TodoState = {
  todos: initial,
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      let newdata = { ...action.payload, id: new Date().getTime() };
      state.todos = [newdata, ...state.todos];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
  },
});
export const { addTodo, updateTodo, deleteTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
