import React from 'react'
import { useParams } from 'react-router-dom'
function Params() {
    const {id}=useParams()
  return (
    <>
    <div className='w-full p-4 bg-amber-400 text-4xl text-center '>user : {id}</div>
    </>
  )
}

export default Params