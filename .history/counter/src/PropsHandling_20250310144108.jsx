import React from 'react'

function PropsHandling({description="Great Place to visit",hashtags=['#travel',"#winter"]}) {
  return (
  <>
 <div className="max-w-sm rounded overflow-hidden shadow-lg mt-4 bg-white">
  <img className="w-full" src="https://images.unsplash.com/photo-1741097574041-d70d3fe6a3ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
  {description} </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" >{}</span>
    {
        hashtags.forEach
    }
  </div>
</div> 
  </>
  )
}

export default PropsHandling