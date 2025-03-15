import React from 'react'

function PasswordGenerator() {
  return (
    <>
    <div className='w-96 p-3 rounded-4xl bg-amber-500 mt-4 '>
    <div className='w-full text-center text-2xl text-gray-800'>Password Generator</div>
    <div>
        <div className='flex bg-white  rounded-2xl h-12 overflow-hidden mt-6'>
            <input type="text" className=' outline-none w-full h-full px-6'/> 
            <button className=' h-full bg-blue-700 w-24 text-white'>Copy</button></div>
    </div>
<div>
    
</div>
    </div>
    </>
  )
}

export default PasswordGenerator