import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import TodoReducer from './reducers/todoReducer';

const rootReducer = combineReducers({
    todos: TodoReducer,
});

export const store = configureStore({ reducer: rootReducer })