import React from 'react'

function Github() {
 return (
    <>
    <div className='w-full p-4 bg-amber-400 text-4xl text-center text-white'>GitHub followers:{data.followers}


        <div className='flex justify-center'>
            <img src={data.avatar_url} alt="Avatar" width={300}/>
        </div>
    </div>
    </>
  )
}

export default Github