import React from 'react'

function PasswordGenerator() {
  return (
    <>
    <div className='w-96 p-3 rounded-4xl bg-amber-500 mt-4 '>
    <div className='w-full text-center text-2xl text-gray-800'>Password Generator</div>
    <div>
        <div className='flex bg-white'><input type="text" className=' outline-none w-full h-12'/> <button className='shrink h-12 rounded-b-md bg-blue-700'>Copy</button></div>
    </div>

    </div>
    </>
  )
}

export default PasswordGenerator