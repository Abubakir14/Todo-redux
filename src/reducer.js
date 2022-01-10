import { createStore } from 'redux' 

// const initialState = {
//     todos: [],
// }

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'ADD_TODO':
//         return {
//             ...state,
//             todos: [...state.todos, action.payload],
//         }
//         case 'DELETE': 
//         return {
//             ...state,
//             todos: state.todos.filter(todo => todo.id !== action.id),
//         }
//         default:
//         return state
//     }
// }


const reducer = (state = 0, action) => {
    console.log(state);
    switch (action.type) {
        case 'increment':
      return state + 1;
    case 'decrement':
        if(state === 0) {
            return
        }
      return state - 1;
        default:
        return state
    }
}
const store = createStore(reducer)

export default store