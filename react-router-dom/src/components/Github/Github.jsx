import React from 'react'
import { useLoaderData } from 'react-router-dom'
import countryCodes from "./countryCode.json";


function Github() {
    const data=useLoaderData()
 return (
    <>
    <div className='w-full p-4 bg-amber-400 text-4xl text-center text-white'>GitHub followers:{data.followers}


        <div className='flex justify-center items-center w-full'>
            <img src={data.avatar_url} alt="Avatar" width={300}/>
         
        </div>
        <ul>   {Object.entries(countryCodes).map(([country, code]) => (
          <li key={country}>
            <strong>{country}:</strong> {code}
          </li>
        ))}</ul>
    </div>
    </>
  )
}

export default Github

export const GithubData=async()=>{
    const response = await fetch('https://api.github.com/users/Bilal-CodeMaster')
    return response.json()
}






