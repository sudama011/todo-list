export const addTodo = (data) => {
    return {
        type: 'ADD_TODO',
        payload: data
    };
};

export const deleteAllTodos = () => {
    return {
        type: 'DELETE_TODOS'
    };
};

export const deleteTodo = (index) => {
    return {
        type: 'DELETE_TODO',
        payload: index
    };
};