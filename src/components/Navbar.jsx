import { useState } from "react";
import logo from '../images/logo.png';
import { Link } from 'react-scroll';
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
    const [menu, setMenu] = useState(false);
  
    const handleChange = () =>{
      setMenu(!menu);
    }
  
    const closeMenu = () =>{
      setMenu(false);
    }
    return (
      <div className='fixed w-full z-50'>
        <div>
          <div className='flex flex-row justify-between p-7 md:px-32 px-5 bg-black shadow-[0_3px_10px_rgba(0,0,0,0.2)]'>
              <div className='flex flex-row items-center cursor-pointer'>
                  <span>
                      <img src={logo} alt='' width={35}/>
                  </span>
                  <h1 className=' text-sm md:text-2xl text-white ml-2'>¿PorqueNo?<span className="ml-3">Ropa importada de marca</span></h1>
              </div>
              <nav className='hidden md:flex flex-row items-center text-white text-lg  gap-8 scroll-smooth'>
                  <Link
                   to='home'
                   spy={true} 
                   smooth={true} 
                   duration={500} 
                   className='hover:text-teal-500 transition-all cursor-pointer'>
                   Home
                   </Link>
                  <Link 
                   to='hombre' 
                   spy={true} 
                   smooth={true} 
                   duration={500} 
                   className='hover:text-teal-500 transition-all cursor-pointer'>
                   Hombre
                   </Link>
                  <Link 
                   to='mujer'
                   spy={true} 
                   smooth={true} 
                   duration={500} 
                   className='hover:text-teal-500 transition-all cursor-pointer'>
                   Mujer
                  </Link>
                  <Link 
                   to='zapatos' 
                   spy={true} 
                   smooth={true} 
                   duration={500} 
                   className='hover:text-teal-500 transition-all cursor-pointer'>
                   Zapatos
                  </Link>
                  <Link 
                   to='buzos' 
                   spy={true} 
                   smooth={true} 
                   duration={500} 
                   className='hover:text-teal-500 transition-all cursor-pointer'>
                   Buzos
                  </Link>
  
              </nav>
              <div className='md:hidden flex items-center'>
                  {menu ? (
                      <IoClose size={25} onClick={handleChange} className='text-white cursor-pointer'/>
                  ):(
                      <TiThMenu size={25} onClick={handleChange} className='text-white cursor-pointer'/>
                  )}
              </div>
          </div>
          <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
          <Link
                   to='home'
                   spy={true} 
                   smooth={true} 
                   duration={500} 
                   className='hover:text-teal-500 transition-all cursor-pointer'
                   onClick={closeMenu}>
                   Home
                   </Link>
                   <Link 
                   to='hombre' 
                   spy={true} 
                   smooth={true} 
                   duration={500} 
                   className='hover:text-teal-500 transition-all cursor-pointer'
                   onClick={closeMenu}>
                   Hombre
                   </Link>
                  <Link 
                   to='mujer'
                   spy={true} 
                   smooth={true} 
                   duration={500} 
                   className='hover:text-teal-500 transition-all cursor-pointer'
                   onClick={closeMenu}>
                   Mujer
                  </Link>
                  <Link 
                   to='zapatos' 
                   spy={true} 
                   smooth={true} 
                   duration={500} 
                   className='hover:text-teal-500 transition-all cursor-pointer'
                   onClick={closeMenu}>
                   Zapatos
                  </Link>
                  <Link 
                   to='buzos' 
                   spy={true} 
                   smooth={true} 
                   duration={500} 
                   className='hover:text-teal-500 transition-all cursor-pointer'
                   onClick={closeMenu}>
                    Buzos
                  </Link>
          </div>
        </div>
      </div>
    )
  }
  
  export default Navbar
  


