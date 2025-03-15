
import { useState } from 'react'
import './App.css'

function App() {
 let [counter,setCounter]=useState
  return (
    <>
   <h1>Counter app</h1>
   <h2>counted Value : {counter}</h2>
   <button>
    Add
   </button>
    <button>
    Subtract
   </button>
    </>
  )
}

export default App
