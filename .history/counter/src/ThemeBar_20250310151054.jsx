import React from 'react'

function ThemeBar({ sendColor }) {
  
  return (
    <>
    <div className='flex flex-col justify-center items-center gap-3'>

    <button
    onClick={() => sendColor("red")}
    className='p-2 rounded-full text-white w-full'
    style={{backgroundColor : "red"}}>
    Red
    </button>
 <button
    onClick={() => sendColor("red")}
    className='p-2 rounded-full text-white w-full'
    style={{backgroundColor : "green"}}>
    green
    </button> <button
    onClick={() => sendColor("red")}
    className='p-2 rounded-full text-white w-full'
    style={{backgroundColor : "red"}}>
    Red
    </button> <button
    onClick={() => sendColor("red")}
    className='p-2 rounded-full text-white w-full'
    style={{backgroundColor : "red"}}>
    Red
    </button> <button
    onClick={() => sendColor("red")}
    className='p-2 rounded-full text-white w-full'
    style={{backgroundColor : "red"}}>
    Red
    </button> <button
    onClick={() => sendColor("red")}
    className='p-2 rounded-full text-white w-full'
    style={{backgroundColor : "red"}}>
    Red
    </button>
    </div>
    </>
  )
}

export default ThemeBar