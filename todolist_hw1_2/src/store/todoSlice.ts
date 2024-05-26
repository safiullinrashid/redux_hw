import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

interface TodoState {
    items: Todo[];
}

const initialState: TodoState = {
    items: [],
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.items.push({
                id: uuidv4(),
                text: action.payload,
                completed: false,
            });
        },
        toggleTodo: (state, action: PayloadAction<string>) => {
            const todo = state.items.find((t) => t.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((t) => t.id !== action.payload);
        },
    },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
