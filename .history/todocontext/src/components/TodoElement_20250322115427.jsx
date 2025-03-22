import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext';

function TodoElement({ todo }) {
    const [todoMsg,setTodoMsg]=useState('')
const {updateTodo,deleteTodo,toggleComplete}=useTodo()
const [isTodoEditable,setIsTodoEditable]=useState(false)
const editTodo=()=>{
    console.log(todo);
updateTodo(todo.id,{...todo,todo:todoMsg})
}
const toggleComplete
    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleComplete}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="bg-gray-50 border border-black/10 h-8 justify-center rounded-lg text-sm w-8 disabled:opacity-50 hover:bg-gray-100 inline-flex items-center shrink-0"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="bg-gray-50 border border-black/10 h-8 justify-center rounded-lg text-sm w-8 hover:bg-gray-100 inline-flex items-center shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoElement;
