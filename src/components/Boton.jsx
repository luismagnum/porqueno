import React from 'react'

const Boton = () => {
  return (
    <div className='text-center mx-auto mt-20'>
      <h1 className=' text-xl md:text-3xl font-bold mb-10'>Quiero hacer una consulta</h1>
    <div className='text-center mx-auto mt-10'>
    <button class="bg-sky-950 text-sky-400 border border-sky-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group z-10 mb-20">
    <span class="bg-sky-400 shadow-sky-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
    <a href="https://wa.me/542984417477?text=Hola quiero hacer un pedido" target="_blank">Encargar ahora</a>
    </button>
    </div>
    </div>
  )
}

export default Boton