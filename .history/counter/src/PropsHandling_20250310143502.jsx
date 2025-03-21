import React from 'react'

function PropsHandling() {
  return (
  <>
 <div classNa="max-w-sm rounded overflow-hidden shadow-lg">
  <img classNa="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
  <div classNa="px-6 py-4">
    <div classNa="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p classNa="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div classNa="px-6 pt-4 pb-2">
    <span classNa="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span classNa="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span classNa="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div> 
  </>
  )
}

export default PropsHandling