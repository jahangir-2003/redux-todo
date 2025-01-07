import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TodoType = {
  id: number;
  title: string;
  price: number;
};

interface TodoState {
  todos: TodoType[];
}

const initial: TodoType[] = [
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
    // Typing the action payload for addTodo
    addTodo: (state, action: PayloadAction<Omit<TodoType, "id">>) => {
      const newTodo: TodoType = { ...action.payload, id: new Date().getTime() };
      state.todos = [newTodo, ...state.todos];
    },

    // Typing the action payload for deleteTodo
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },

    // Typing the action payload for updateTodo
    updateTodo: (state, action: PayloadAction<TodoType>) => {
      state.todos = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
