
import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0)
  const addValue=()=>{
    if(counter<20){
  setCounter(counter+1)
    }
 }
 const subtractValue=()=>{
  if(counter!=0){

    setCounter(counter-1)
  }
 }
  return (
    <>
   
    </>
  )
}

export default App
