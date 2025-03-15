
import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0)
  const addValue=()=>{
  setCounter(counter+1)
 }
 const subtractValue=()=>{
  if(counter!=0){

    setCounter(counter-1)
  }
 }
  return (
    <>
   <h1>Counter app</h1>
   <h2>counted Value : {counter}</h2>
   <button onClick={addValue}>
    + Add
   </button>
    <button onClick={subtractValue}>
    Subtract
   </button>
    </>
  )
}

export default App
