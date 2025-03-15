import React from 'react'

function ThemeBar() {
  return (
    <>
    <div className='flex flex-col justify-center items-center gap-3'>
    <button className='p-2 rounded-full text-white w-full'
    style={{backgroundColor : "red"}}>
    Red
    </button>
    </div>
    </>
  )
}

export default ThemeBar