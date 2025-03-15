import React, { useEffect, useRef, useState } from 'react'

function PasswordGenerator() {
  const [password,setPassword]=useState('')
  const [length,setLength]=useState(8)
  const [isCharSelected,setIsCharSelected]=useState(false)
  const [isNumberSelected,setIsNumberSelected]=useState(false)
  const text=useRef('')
 const copyText = (e) => {
  e.preventDefault(); 
   if (inputRef.current) {
      inputRef.current.select(); // Selects all text inside the input
    }
  window.navigator.clipboard.writeText(password)
    .then(() => {
      alert("Password copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy:", err);
    });
};

  useEffect(()=>{
    let set=
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(isCharSelected){
      set+='@!#$%^&*><.,?'
    } 
    if(isNumberSelected){
      set+='123456789'
    }
let passwordValue=''

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * set.length); 
    
      passwordValue+=set.charAt(index)
      
    }
    setPassword(passwordValue) 
  },[length,isCharSelected,isNumberSelected])
  return (
    <>
    <div className='w-96 p-3 rounded-4xl bg-amber-500 m-4 '>
    <div className='w-full text-center text-2xl text-gray-800'>Password Generator</div>
    <div>
        <div className='flex bg-white  rounded-2xl h-12 overflow-hidden mt-6'>
            <input type="text" readOnly value={password}  className=' outline-none w-full h-full px-6' ref={text}/> 
            <button className=' h-full bg-blue-700 w-24 text-white' onClick={copyText}>Copy</button></div>
    </div>
<div className='m-3 flex gap-1 justify-center items-center text-white'>
 <div className='flex gap-1 justify-center items-center'>  
  <input type="range" id='length' value={length}
    onChange={(e)=>setLength(e.target.value)}
    /> 
    <label htmlFor="length">Length {length}</label>
    </div> 
  <div className='flex gap-1 justify-center items-center'>
  <label>
        <input
          type="radio"
          name="character"
          checked={isCharSelected === "option1"}
          onChange={() => setIsCharSelected("option1")}
        />
        Character
      </label>
        <label>
        <input
          type="radio"
          name="Number"
          checked={isNumberSelected === "option2"}
          onChange={() => setIsNumberSelected("option2")}
        />
        Number
      </label>

  </div>
</div>
    </div>
    </>
  )
}

export default PasswordGenerator