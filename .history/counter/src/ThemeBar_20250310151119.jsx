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
    onClick={() => sendColor("green")}
    className='p-2 rounded-full text-white w-full'
    style={{backgroundColor : "green"}}>
    Green
    </button> <button
    onClick={() => sendColor("blue")}
    className='p-2 rounded-full text-white w-full'
    style={{backgroundColor : "blue"}}>
    Blue
    </button> <button
    onClick={() => sendColor("Gray")}
    className='p-2 rounded-full text-white w-full'
    style={{backgroundColor : "Gray"}}>
    Gray
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