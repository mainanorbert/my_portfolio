import React from 'react'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import passport from '../images/passport.jpg'
import Display from '../pages/Display';
import { Link, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import '../../mycss.css'




const Navbar = () => {

  const [optionSelect, setOptionSelect] = useState('');

  const [isOpen, setIsOpen] = useState(false);

  const [hideNav, setHideNav] = useState(false)

  const handleClick = () => {
    setHideNav(!hideNav);
  }

  const selectChange = (e) => {
    setOptionSelect(e.target.value);
    window.location.href = e.target.value;
  };

  const navRef = useRef()
  const navOp = useRef()

  const showNav = () => {

    navRef.current.classList.toggle('hidden')
    // navOp.current.classList.toggle('animate-pulse')
    // navRef.current.classList.toggle('op')

    setIsOpen(!isOpen)
  }
  const user = true

  const [activeLink, setActiveLink] = useState(null)
  const location=useLocation();
  useEffect(()=>{
    setActiveLink(location.pathname)
  }, [location]);


  return (
    <div className='w-full md:text-center relative bg-slate-800 min-h-[4rem]'>
      <button onClick={showNav} className='absolute top-2 md:hidden text-white font-extrabold text-3xl left-4'>{!isOpen ? <FaBars /> :<FaTimes /> }</button>

      <nav className='md:flex block gap-2 md:h-[6rem] items-center text-neutral-400 font-bold justify-between  bg-slate-800 '>
        <Link to='/' className=' md:text-left text-center md:text-xl text-yellow-500 text-3xl pl-2'>NoberTechx</Link>
        <div ref={navRef} className='md:flex translate-y-0 transition-transform hidden md:opacity-100 opacity-0.2  duration-1000  gap-2 md:h-[6rem] items-center text-neutral-400 font-bold justify-between  bg-slate-800'>
          <div className='basis-1/3 w-full md:flex gap-3 grid place-items-start justify-between hover:text-neutral-200 hover:underline px-2 text-center'>
            <Link to="/" className={`${activeLink==='/'?'text-yellow-300 underline':''}`} onClick={()=>setActiveLink('/')}>Home</Link>
            <Link to="/articles" className={`${activeLink==='/articles'?'text-yellow-300 underline':''}`}>Articles</Link>
            <Link to="/about" className={`${activeLink==='/about'?'text-yellow-300 underline':''}`} >About</Link>
            <Link to="/contact" className={`${activeLink==='/contact'?'text-yellow-300 underline':''}`}>Contact</Link>
          </div>

          <div className='md:flex justify-between  w-full gap-2'>
            <div className='basis-1/4 md:flex justify-center gap-4 space-x-2'>
              <Link to="https://web.facebook.com/?_rdc=1&_rdr" target={'_blank'}  ><FontAwesomeIcon className='md:h-10 text-blue-500' icon={faFacebook} /></Link>
              <Link to="https://web.whatsapp.com/" target={'_blank'} ><FontAwesomeIcon className='md:h-10  text-green-500' icon={faWhatsapp} /></Link>
              <Link to="https://www.instagram.com/" target={'_blank'}  ><FontAwesomeIcon className='md:h-10 text-slate-400' icon={faInstagram} /></Link>
            </div>

            <div className='font-bold'>
              {user ? (<Link to="/add/article" className={`${activeLink==='/add/article'?'text-yellow-300 underline':''}`}>New Article <span className='font-bold text-xl'>
                <i class="fas fa-plus"></i></span></Link>) : ''}
            </div>
            <div className='w-full flex md:justify-center gap-1 basis-1/2'>
              <input className='bg-transparent border-2 border-slate-500 rounded md:h-10 md:w-8/12 w-4/12' type="text" />
              <a href=""><FontAwesomeIcon className='md:h-10 h-6 text-slate-400' icon={faSearch} /></a>
            </div>
          </div>



          <div className='basis-1/4 md:flex justify-end gap-2 md:space-x-0 space-x-4 items-center hover:text-neutral-200 hover:underline  px-2'>
            {!user ? (<div className='flex gap-2'>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>) :
              (<div className=' w-[10rem] relative pb-4' onMouseEnter={handleClick} onMouseLeave={() => { setHideNav(false) }}>
                <img className="md:w-20 w-20 rounded-full" src={passport} alt="My Image" />

                {hideNav ? (
                  <div className='hover:bg-green-400 flex justify-center  w-full h-[4rem] text-blue-500 rounded  pt-4 px-1 absolute right-2 bottom--'>
                    <div className='grid text-xs gap-2 h-8 place-items-center w-full'>
                      <Link className='hover:bg-green-200 hover:text-blue-800 ' to="/settings">Settings</Link>
                      <Link className='hover:bg-green-200 hover:text-blue-800' to="/">Profile</Link>

                    </div>
                  </div>) : ''}

              </div>)
            }

          </div>

        </div>
      </nav>

    </div>
  )
}

export default Navbar