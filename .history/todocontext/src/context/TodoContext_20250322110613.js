import { createContext, useContext } from "react";

export const TodoContext=createContext([
    {
        id:1,
        todoMsg:"",
        completed:false

}
],


)


export const useTodo=()=>{
    return useContext(TodoContext)
}

export const todoProvider=TodoContext.Provider