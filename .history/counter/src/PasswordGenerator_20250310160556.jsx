import React from 'react'

function PasswordGenerator() {
  return (
    <>
    <div className='w-96 p-3 rounded-4xl bg-amber-500 mt-4 '>
    <div className='w-full text-center text-2xl text-gray-800'>Password Generator</div>
    <div>
        <div className='flex bg-white  rounded-2xl h-12 overflow-hidden'><input type="text" className=' outline-none w-full h-full'/> <button className=' h-full bg-blue-700 w-32 text-white'>Copy</button></div>
    </div>

    </div>
    </>
  )
}

export default PasswordGenerator