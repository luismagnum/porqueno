import React from 'react';
import hom from '../images/hombre.png'

const Hombre = () => {
  return (
  <div className='text-center justify-items-center mx-auto mt-16'>
      <h1 className='text-3xl font-bold mb-10'>HOMBRE</h1>
    <div className='grid grid-cols-1 ml-6 md:grid-cols-3 pl-6 mx-auto'>
      <div class="card w-80 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
  <img src={hom} alt=''/>
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Buzo</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
      <button class="btn btn-primary font-bold">$ 20000</button>
    </div>
  </div>
  </div>
  <div class="card w-80 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
  <img src={hom} alt=''/>
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Buzo</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
      <button class="btn btn-primary font-bold">$ 20000</button>
    </div>
  </div>
  </div>
  <div class="card w-80 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
  <img src={hom} alt=''/>
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Buzo</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
      <button class="btn btn-primary font-bold">$ 20000</button>
    </div>
  </div>
  </div>
  </div>
  </div>
  )
}

export default Hombre