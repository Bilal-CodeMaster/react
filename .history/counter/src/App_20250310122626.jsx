
import { useState } from 'react'
import './App.css'

let [counter,setCounter]=useState
function App() {
 const addValue=()={
  setCounter(++counter)
 }
  return (
    <>
   <h1>Counter app</h1>
   <h2>counted Value : {counter}</h2>
   <button onClick={addValue}>
    Add
   </button>
    <button>
    Subtract
   </button>
    </>
  )
}

export default App
