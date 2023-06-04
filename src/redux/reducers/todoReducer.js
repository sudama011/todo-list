const todos = [{
    tittle:"tittle",
    description:"description",
    done:false,
}];

export default (state = todos, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state,action.payload];

        case 'DELETE_TODOS':
            return [];
        
        case 'DELETE_TODO':
            const newTodos = action.payload.filter((item, index)=>{
                return (index != action.payload)
            })
            return newTodos;

        default:
            return state;
    }
};