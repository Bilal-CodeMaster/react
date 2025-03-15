import React from 'react'

function PasswordGenerator() {
  return (
    <>
    <div className='w-96 p-3 rounded-4xl bg-amber-500 mt-4 '>
    <div className='w-full text-center text-2xl text-gray-800'>Password Generator</div>
    <div>
        <div className='flex'><input type="text" className='bg-white outline-none rounded-2xl w-full h-12'/> <button className='shrink h-12 w'>Copy</button></div>
    </div>

    </div>
    </>
  )
}

export default PasswordGenerator