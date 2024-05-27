import React from 'react'
import nike from '../images/nike.svg'
import puma from '../images/puma.svg'
import fila from '../images/fila.svg'
import adidas from '../images/adidas.svg'
import under from '../images/underarmour.svg'

const Marcas = () => {
  return (
    <div className='text-center mx-auto px-12'>
    <div className='grid grid-cols-5 text-center justify-items-center mx-auto'>
        <img src={nike} alt='' className='w-6 md:w-16'/>
        <img src={puma} alt='' className='w-6 md:w-16'/>
        <img src={adidas} alt='' className='w-6 md:w-16'/>
        <img src={fila} alt='' className='w-6 md:w-16'/>
        <img src={under} alt='' className='w-6 md:w-16'/>
    </div>
    </div>
  )
}

export default Marcas