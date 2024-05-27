import React from 'react'
import zapa from '../images/nike.png'

const Zapatos = () => {
  return (
    <div className='text-center justify-items-center mx-auto mt-12'>
        <h1 className='text-3xl font-bold mb-10'>ZAPATILLAS</h1>
    <div className='grid grid-cols-1 md:grid-cols-4 text-center mx-auto'>
        <div class="text center mx-auto w-72 p-4 bg-white rounded-lg shadow-md ">
            <img src={zapa} alt=''/>
              <div class="p-4">
              <h2 class="text-xl  font-semibold">Nike</h2>
              <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis ante sit amet tellus ornare tincidunt.</p>
            <div class="flex justify-between items-center mt-4">
                <button class="bg-teal-500 hover:bg-teal-700 text-black px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">$ 20000</button>
            </div>
        </div>
    </div>
    <div class="text center mx-auto w-72 p-4 bg-white rounded-lg shadow-md ">
            <img src={zapa} alt=''/>
              <div class="p-4">
              <h2 class="text-xl  font-semibold">Puma</h2>
              <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis ante sit amet tellus ornare tincidunt.</p>
            <div class="flex justify-between items-center mt-4">
                <button class="bg-teal-500 hover:bg-teal-700 text-black px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">$ 20000</button>
            </div>
        </div>
    </div>
    <div class="text center mx-auto w-72 p-4 bg-white rounded-lg shadow-md ">
            <img src={zapa} alt=''/>
              <div class="p-4">
              <h2 class="text-xl  font-semibold">Adiddas</h2>
              <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis ante sit amet tellus ornare tincidunt.</p>
            <div class="flex justify-between items-center mt-4">
                <button class="bg-teal-500 hover:bg-teal-700 text-black px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">$ 20000</button>
            </div>
        </div>
    </div>
    <div class="text center mx-auto w-72 p-4 bg-white rounded-lg shadow-md ">
            <img src={zapa} alt=''/>
              <div class="p-4">
              <h2 class="text-xl  font-semibold">Fila</h2>
              <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis ante sit amet tellus ornare tincidunt.</p>
            <div class="flex justify-between items-center mt-4">
                <button class="bg-teal-500 hover:bg-teal-700 text-black px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 mb-16">$ 20000</button>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Zapatos