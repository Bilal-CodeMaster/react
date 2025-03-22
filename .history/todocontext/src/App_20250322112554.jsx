import { useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoElement from "./components/TodoElement"
import TodoProvider from "./context/TodoContext"
function App() {
  const [todos,setTodos]=useState([])

  const createTodo=(todo)=>{

    setTodos((prev)=>[...prev,{id:Date.now(),todo,completed:false}])
  }

const updateTodo=(id,todo)=>{
  setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?todo:prevTodo)))

}

const deleteTodo=(id)=>{
  setTodos((prev)=>prev.filter((prevTodo)=>(prevTodo.id!==id)))

}
const toggleComplete=(id)=>{

  setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?{...prevTodo,completed}:'')))

}

  return (
   <TodoProvider value={{todos,createTodo,updateTodo,deleteTodo,toggleComplete}}>
  <div className="bg-[#172842] min-h-screen py-8">
                <div className="rounded-lg shadow-md text-white w-full max-w-2xl mx-auto px-4 py-3">
                    <h1 className="text-2xl text-center font-bold mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {
                          todos.map((todo)=>(
                            <div key={todo.id} className="w-full">
                             <TodoElement todo={todo}/>

                            </div>

                          ))
                        }
                    </div>
                </div>
            </div>
   </TodoProvider>
  )
}

export default App
