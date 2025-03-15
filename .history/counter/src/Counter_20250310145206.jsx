import { useState } from 'react'

export default function Counter() {
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
     <div className='bg-black flex flex-col jus'>

    <h1>Counter app</h1>
    <h2>counted Value : {counter}</h2>
    <button onClick={addValue}>
     + Add
    </button>
     <button onClick={subtractValue}>
     - Subtract
    </button>
     </div>
     </>
   )
 }