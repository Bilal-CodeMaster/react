import React from 'react'

function PasswordGenerator() {
  return (
    <>
    <div className='w-96 p-3 rounded-4xl bg-amber-500 mt-4 '>
    <div className='w-full text-center text-2xl text-gray-800'>Password Generator</div>
    <div>
        <div><input type="text" className='bg-white outline-none '/> <button>Copy</button></div>
    </div>

    </div>
    </>
  )
}

export default PasswordGenerator