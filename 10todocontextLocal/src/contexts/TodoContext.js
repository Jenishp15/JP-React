import {createContext, useContext} from "react"
import { TodoContext } from "."


export default TodoContext = createContext({

    Todos : [
        {
            id: 1,
            todo: "Todo msg",
            completed: false
        }
    ],
     addTodos: (todo) => {},
     updatedTodo: (id,todo) => {},
     deleteTodo: (id) => {},
     toggleComplete: (id) => {}

}) 

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider