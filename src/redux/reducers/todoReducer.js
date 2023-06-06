import produce from 'immer';

const todos = [
    {
        tittle: "Learn react native",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic veritatis aperiam ad dolor odio culpa!",
        completed: false,
    }, {
        tittle: "Learn Redux",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing",
        completed: true,
    }
];

const todoReducer = (state = todos, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state,action.payload];

        case 'COMPLETE_TODO':
            const updatedTodos = produce(state, (todos) => {
                todos[action.payload.index].completed = !todos[action.payload.index].completed
            })
            return updatedTodos;

        case 'DELETE_ALL_TODOS':
            return [];
        default:
            return state;
    }
};

export default todoReducer;