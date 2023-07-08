import React from 'react'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import passport from '../images/passport.jpg'
import Display from '../pages/Display';
import { Link, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { FaBars, FaHandHolding, FaTimes } from 'react-icons/fa';
import { useAuthContext } from '../../context/ContextProvider';
import axiosClient from '../../axios/AxiosClient';
import '../../mycss.css'




const Navbar = () => {
  const { token, myToken, setUser, setUserId } = useAuthContext()

  const [optionSelect, setOptionSelect] = useState('');

  const [isOpen, setIsOpen] = useState(false);

  const [hideNav, setHideNav] = useState(false)
  const [email, setEmail] = useState('')
  

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
  // const user = false

  const [activeLink, setActiveLink] = useState(null)
  const location = useLocation();
  useEffect(() => {
    setActiveLink(location.pathname)
  }, [location]);
  useEffect(() => {
    if (token) {
      axiosClient.get('/user')
        .then(({ data }) => {
          setEmail(data.email)
          setUserId(data.id)
        })
        .catch((error) => {
          console.log(error);
        })

    }
  
  })
  const handleMyLogout = () => {
    axiosClient.get('/logout')
      .then((response) => {
        myToken(null)
        setUser(null)
        console.log('token', token) 
        localStorage.removeItem('ACCESS_TOKEN')
      })
      .catch((error) => {
        console.log(error)
      })
  }
  
  return (
    <div className='w-full md:text-center relative bg-red-800 '>
      <button onClick={showNav} className='absolute md:top-2 md:hidden p- text-white font-extrabold text-3xl left-4'>{!isOpen ? <FaBars /> : <FaTimes />}</button>

      <nav className='md:flex block gap-2  items-center text-neutral-400 font-bold justify-between  bg-slate-800 '>
        <div className=' pl-[4rem] md:pl-0'>
          <Link to='/' className=' md:text-left text-cente md:text-xl   p-3 text-yellow-500 text-2xl pl-2'>NoberTechx</Link>
        </div>
        <div ref={navRef} className='md:flex translate-y-0 p-3 transition-transform hidden md:opacity-100 opacity-0.2  duration-1000  gap-2 items-center text-neutral-400 font-bold justify-between  bg-slate-800'>
          <div className='basis-1/3 w-full md:flex gap-3 grid place-items-start justify-between hover:text-neutral-200 hover:underline px-2 text-center'>
            <Link to="/" className={`${activeLink === '/' ? 'text-yellow-300 underline' : ''}`} onClick={() => setActiveLink('/')}>Home</Link>
            <Link to="/articles" className={`${activeLink === '/articles' ? 'text-yellow-300 underline' : ''}`}>Articles</Link>
            <Link to="/about" className={`${activeLink === '/about' ? 'text-yellow-300 underline' : ''}`} >About</Link>
            <Link to="/contact" className={`${activeLink === '/contact' ? 'text-yellow-300 underline' : ''}`}>Contact</Link>
          </div>

          <div className='md:flex justify-between  w-full gap-2'>
            <div className='basis-1/ md:flex justify-center gap-4 space-x-2'>
              <Link to="https://web.facebook.com/?_rdc=1&_rdr" target={'_blank'}  ><FontAwesomeIcon className='md:h-5 text-blue-500' icon={faFacebook} /></Link>
              <Link to="https://web.whatsapp.com/" target={'_blank'} ><FontAwesomeIcon className='md:h-5  text-green-500' icon={faWhatsapp} /></Link>
              <Link to="https://www.instagram.com/" target={'_blank'}  ><FontAwesomeIcon className='md:h-5 text-slate-400' icon={faInstagram} /></Link>
            </div>

            <div className='font-bold'>
              {(<Link to="/add/article" className={`${activeLink === '/add/article' ? 'text-yellow-300 underline' : 'hover:text-neutral-300 hover:underline'}`}>Add Article <span className='font-bold text-xl'>
                <i class="fas fa-plus"></i></span></Link>)}
            </div>
            <div className='w-full flex md:justify-center gap-1 basis-1/2'>
              <input className='bg-transparent border-2 border-slate-500 rounded md:h-6  md:w-8/12 w-/12' type="text" />
              <a href=""><FontAwesomeIcon className=' h-6 text-slate-400' icon={faSearch} /></a>
            </div>
          </div>



          <div className='basis-1/4 md:flex justify-end bg-green-00 gap-2 md:space-x-0 space-x-4 items-center hover:text-neutral-200 hover:underline  px-2'>
            {!token ? (<div className='flex gap-2'>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>) :

              (<div className=' relative bg-green-' onMouseEnter={handleClick} onMouseLeave={() => { setHideNav(false) }}>
                <img className="md:w-20 w-20 rounded-full" src={passport} alt="My Image" />

                {hideNav ? (
                  <div
                    className='hover:bg-white h-[9rem] flex justify-center l-4  w-[9rem] left-[-3.5rem] text-blue-500 rounded  absolute'>
                    <div className=' text-xs space-y-4 font-bold p-2 border place-items-center w-full'>
                      <div className='font-bold text-sm text-slate-500 underline '>{email}</div>
                      <div> <Link className='hover:bg-slate-200 p-2 roundedp-2 rounded hover:text-blue-800 ' to="/settings">Settings</Link></div>
                      <div><Link className='hover:bg-slate-200 p-2 rounded hover:text-blue-800' to="/">Profile</Link></div>
                      <div><button onClick={handleMyLogout}  className='hover:bg-slate-200 p-2 rounded hover:text-blue-800' to="/">Logout</button></div>

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