export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo
    };
};

export const toggleState = (index) => {
    return {
        type: 'TOGGLE_STATE',
        payload:index
    };
};


export const deleteAllTodos = () => {
    return {
        type: 'DELETE_TODOS'
    };
};

export const deleteSingleTodo = (index) => {
    return {
        type: 'DELETE_TODO',
        payload: index
    };
};