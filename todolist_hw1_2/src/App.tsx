import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import TodoList from './components/TodoList';
import todoReducer from './store/todoSlice';

const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
});

const App = () => {
    return (
        <Provider store={store}>
            <TodoList />
        </Provider>
    );
};

export default App;
