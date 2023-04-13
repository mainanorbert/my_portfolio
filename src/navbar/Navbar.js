import React from 'react'

import { useRef } from 'react'

import { FaBars, FaTimes } from 'react-icons/fa'


const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('hidden')
    }
    return (
        <div className='w-full'>
        <div className='w-11/12  bg-slate-700 h-[6rem]'>
            <nav ref={navRef} className='md:flex hidden fixed z-10 flex-col justify-between px-8'>
                <a href=""><img src="" alt="Logo" /></a>
                <div className='md:flex gap-12  bg-green-400 w-8/12 text-neutral-200  font-extrabold justify-around'>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Contacts</a>
                <button className='md:hidden' onClick={showNavbar}><FaTimes /></button>

                </div>
               
                
            </nav>
            <button className='md:hidden block fixed' onClick={showNavbar}><FaBars /></button>
            
        </div>
        
        </div>
    )
}

export default Navbar
