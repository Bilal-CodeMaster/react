import { createContext, useContext } from "react";

export const TodoContext=createContext([
    {
        id

}
])


export const useTodo=()=>{
    return useContext(TodoContext)
}

export const todoProvider=TodoContext.Provider