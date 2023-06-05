import produce from 'immer'

const todos = [
    {
        tittle: "Learn react native",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic veritatis aperiam ad dolor odio culpa!",
        done: false,
    }, {
        tittle: "Learn Redux",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing",
        done: true,
    }
];

export default (state = todos, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload];

        case 'DELETE_TODOS':
            return [];

        case 'DELETE_TODO':
            const newTodos = produce(state, (todos) => {
                todos = todos.filter((item, index) => {
                    return (index != action.payload)
                });
            })
            return newTodos;
        
        case 'TOGGLE_STATE' :
            const index = action.payload;
            const updatedTodos = produce(state, (todos) => {
                todos[index].done = !todos[index].done 
            })
            return updatedTodos;
        default:
            return state;
    }
};