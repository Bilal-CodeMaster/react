import React from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data=useLoaderData()
    u
 return (
    <>
    <div className='w-full p-4 bg-amber-400 text-4xl text-center text-white'>GitHub followers:{data.followers}


        <div className='flex justify-center items-center w-full'>
            <img src={data.avatar_url} alt="Avatar" width={300}/>
           { CountryCodesComponent[1]}
        </div>
    </div>
    </>
  )
}

export default Github

export const GithubData=async()=>{
    const response = await fetch('https://api.github.com/users/Bilal-CodeMaster')
    return response.json()
}






