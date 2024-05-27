import React from 'react';
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import logo from '../images/logo.png';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className='bg-black text-white rounded-t-3xl mt-8 md:mt-0'>
      <div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px-5'>
        <div className='w-full md:w-1/4'>
            <h1 className='text-teal-500 font-semibold text-xl pb-4'>¿Porqueno?</h1>
            <p className='text-sm text-justify'>
            En Porqueno?, nos apasiona ofrecerte lo mejor en ropa casual, combinando estilo,
             comodidad y calidad. Nuestra colección está diseñada para aquellos que buscan 
             expresarse a través de prendas versátiles y modernas, perfectas para cualquier
             ocasión.
            
            </p>
        </div>
        <div>
            <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0  hover:text-teal-500 transition-all cursor-pointer'>Hombre</h1>
            <nav className='flex flex-col gap-2'>
            <a className="hover:text-teal-500 transition-all cursor-pointer" href='/'>remeras</a>
            <a className="hover:text-teal-500 transition-all cursor-pointer" href='/'>jeans</a>
            <a className="hover:text-teal-500 transition-all cursor-pointer" href='/'>buzos</a>
            <a className="hover:text-teal-500 transition-all cursor-pointer" href='/'>zapatillas</a>
            </nav>
        </div>
        <div>
            <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0  hover:text-teal-500 transition-all cursor-pointer'>Mujer</h1>
            <nav className='flex flex-col gap-2'>
            <a className="hover:text-teal-500 transition-all cursor-pointer" href='/'>remeras</a>
            <a className="hover:text-teal-500 transition-all cursor-pointer" href='/'>jeans</a>
            <a className="hover:text-teal-500 transition-all cursor-pointer" href='/'>Buzos</a>
            <a className="hover:text-teal-500 transition-all cursor-pointer" href='/'>zapatillas</a>
            </nav>
        </div>
        <div>
            <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0 hover:text-teal-500 transition-all cursor-pointer'>Zapatillas</h1>
            <nav  className='flex flex-col gap-2'>
            <a className="hover:text-teal-500 transition-all cursor-pointer" href='/'>nike</a>
            <a className="hover:text-teal-500 transition-all cursor-pointer" href='/'>puma</a>
            <a className="hover:text-teal-500 transition-all cursor-pointer" href='/'>adiddas</a>
            <a className="hover:text-teal-500 transition-all cursor-pointer" href='/'>fila</a>
            </nav>
        </div>
      </div>
          <div className='flex flex-row items-center justify-center gap-6'>
          <button className='flex border-2 border-black bg-black p-2 text-white gap-4'>
            <a className="text-teal-500 text-4xl hover:text-teal-800" href="#"><FaWhatsappSquare /></a>
            <a className="text-teal-500 text-4xl hover:text-teal-800" href="#"><FaFacebookSquare /></a>
            <a className="text-teal-500 text-4xl hover:text-teal-800" href="#"><FaInstagramSquare /></a>
          </button>
          </div>
          <div className='flex items-center justify-center'>
            <button className='grid grid-cols-1'>
              <a className='flex text-center text-teal-500 font-semibold text-2xl hover:text-teal-800' href='#Seccion1'>HOME</a>
            </button>
          </div>
      <div>
       <p className='text-center text-sm py-4'>
        @¿Porqueno? 2024<br></br>
        <span className='text-teal-500'>Software developer Luis Enrique Diaz </span>
       </p>
      </div>
      <br></br>
    </div>
  )
}

export default Footer
