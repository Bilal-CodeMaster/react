import { createContext, useContext } from "react";

export const TodoContext=createContext([
    {
        id:1,
        

}
])


export const useTodo=()=>{
    return useContext(TodoContext)
}

export const todoProvider=TodoContext.Provider