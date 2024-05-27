import React from 'react'
import buzo from '../images/buzo.png'

const Buzos = () => {
  return (
    <div className='container text-center justify-items-center mx-auto mt-14'>
    <h1 className='text-3xl font-bold mb-10'>Buzos</h1>
    <div className='text text-center justify-items-center mx-auto grid grid-cols-1 md:grid-cols-3'>
        <div class="w-60 h-72 bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl">
  <div class="h-48 bg-gray-700 rounded-xl"><img src={buzo} alt=''/></div>
  <div class="flex flex-col gap-4">
    <div class="flex flex-row justify-between">
      <div class="flex flex-col">
        <span class="text-xl font-bold">Buzo</span>
        <p class="text-xs text-gray-700">talle s,m,l</p>
      </div>
      <span class="font-bold  text-red-600">$10000</span>
    </div>
    <button class="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md">comprar</button>
  </div>
</div>
<div class="w-60 h-72 bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl">
  <div class="h-48 bg-gray-700 rounded-xl"><img src={buzo} alt=''/></div>
  <div class="flex flex-col gap-4">
    <div class="flex flex-row justify-between">
      <div class="flex flex-col">
        <span class="text-xl font-bold">Buzo</span>
        <p class="text-xs text-gray-700">talle s,m,l</p>
      </div>
      <span class="font-bold  text-red-600">$20000</span>
    </div>
    <button class="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md">comprar</button>
  </div>
</div>
<div class="w-60 h-72 bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl">
  <div class="h-48 bg-gray-700 rounded-xl"><img src={buzo} alt=''/></div>
  <div class="flex flex-col gap-4">
    <div class="flex flex-row justify-between">
      <div class="flex flex-col">
        <span class="text-xl font-bold">Buzo</span>
        <p class="text-xs text-gray-700">talle s,m,l</p>
      </div>
      <span class="font-bold  text-red-600">$25000</span>
    </div>
    <button class="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md">comprar</button>
  </div>
</div>
</div>
</div>
  )
}

export default Buzos