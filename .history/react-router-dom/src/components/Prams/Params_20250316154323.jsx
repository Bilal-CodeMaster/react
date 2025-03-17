import React from 'react'
import { useParams } from 'react-router-dom'
function Params() {
    const {id}=useParams()
  return (
    <>
    <div className='wi'>user : {id}</div>
    </>
  )
}

export default Params