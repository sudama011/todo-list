export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    payload: {
        ...todo,
        id: Date.now(),
        completed: false
    }
});

export const completeTodo = index => ({
    type: 'COMPLETE_TODO',
    payload: {
        index,
    },
});

export const deleteAllTodos = () => ({
    type: 'DELETE_ALL_TODOS',
});