import React, { useEffect, useState } from 'react'

function PasswordGenerator() {
  const [password,setPassword]=useState('')
  const [length,setLength]=useState(8)
  const [isCharSelected,setIsCharSelected]=useState(false)
  const [isNumberSelected,setIsNumberSelected]=useState(false)
  
  useEffect(()=>{
    let set=
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(isCharSelected){
      set+='@!#$%^&*><.,?'
    } 
    if(isNumberSelected){
      set+='123456789'
    }
    for (let i = 0; i < length; i++) {
       set(i)
      
    }
  },[password,length,isCharSelected,isNumberSelected])
  return (
    <>
    <div className='w-96 p-3 rounded-4xl bg-amber-500 m-4 '>
    <div className='w-full text-center text-2xl text-gray-800'>Password Generator</div>
    <div>
        <div className='flex bg-white  rounded-2xl h-12 overflow-hidden mt-6'>
            <input type="text" readOnly value={password}  className=' outline-none w-full h-full px-6'/> 
            <button className=' h-full bg-blue-700 w-24 text-white'>Copy</button></div>
    </div>
<div className='m-3'>
    <input type="range" />
</div>
    </div>
    </>
  )
}

export default PasswordGenerator