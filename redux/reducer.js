
const init = {
    todos: [],
};

const reducer = (state = init, action) => {
    switch (action.type) {
        case 'add':
            return {
                todos: [
                    ...state.todos,
                    {
                        id: state.todos.length + 2,
                        txtJob: action.content,
                    },
                ],
            };
        case 'delete':
            return {
                // todos: state.todos.splice(action.id,1),
                todos: state.todos.filter((todo) => todo.id !== action.content)
            };
        case 'edit':
            return {
                todos: state.todos.map((todos) =>
                    todos.id === action.content.id)
                    ? { ...todos, txtJob: action.content.txtJob }
                    : todos
            };
        default:
            return state;
    }
};
export default reducer;