import React, { useState } from 'react'

function ThemeBar() {
    const [color,setColor]=useState('red')
     const sendColor = () => {
    sendData(color); // Send data to Parent
  };
  return (
    <>
    <div className='flex flex-col justify-center items-center gap-3'>

    <button
    onClick={sendColor}
    className='p-2 rounded-full text-white w-full'
    style={{backgroundColor : "red"}}>
    Red
    </button>

    </div>
    </>
  )
}

export default ThemeBar