import {createSlice, nanoid} from "@reduxjs/toolkit" 

const initialState = {
    todos: [] // This Is The Array Where Data Will Be Pushed Or Deleted
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo) // If There Is Doubt Where todos Come From See Line 4
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todos) => todos.id !== action.payload)
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer
