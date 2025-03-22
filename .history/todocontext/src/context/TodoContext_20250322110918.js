import { createContext, useContext } from "react";

export const TodoContext=createContext(
    {
        
        todos:[
    {
        id:1,
        todoMsg:"",
        completed:false

}
],
createTodo:(todo)=>{},
updateTodo:(id,todo)=>{},
delete

}

)


export const useTodo=()=>{
    return useContext(TodoContext)
}

export const todoProvider=TodoContext.Provider