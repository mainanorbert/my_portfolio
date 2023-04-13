import React from 'react'
import Navbar from './Navbar'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebook, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {


    const [activeLink, setActiveLink] = useState(null)
    const location = useLocation();
    useEffect(() => {
        setActiveLink(location.pathname)
    }, [location]);

    return (
        <div id='footer' className="grid grid-cols-3 bg-black gap-2 text-white place-items-center  mt-[4rem] ">

            <div>
                <div className='underline font-bold text-neutral-400 '>Links</div>
                <ul className="list-disc text-blue-200">
                    <li><Link to="/" className={`${activeLink === '/' ? 'text-yellow-300 underline' : ''}`} onClick={() => setActiveLink('/')}>Home</Link></li>
                    <li> <Link to="/articles" className={`${activeLink === '/articles' ? 'text-yellow-300 underline' : ''}`}>Articles</Link></li>
                    <li><Link to="/about" className={`${activeLink === '/about' ? 'text-yellow-300 underline' : ''}`} >About</Link></li>
                    <li><Link to="/contact" className={`${activeLink === '/contact' ? 'text-yellow-300 underline' : ''}`}>Contact</Link></li>
                </ul>
            </div>
            <div>
                
                    <p className='underline font-bold list-disc text-neutral-400'>Contacts</p>
                    <ul className='list-disc'>
                    <li className=' space-x-2'> <span className='space-x-2'>Email Us <i class="fas fa-envelope"></i>:</span>
                    
                        <p>mainanorbert@gmail.com</p>
                    </li>
                    <li className=' space-x-2'> <span className='space-x-2'>Phone <i class="fas fa-envelope"></i>:</span>
                    
                    <p>0799535642</p>
                </li>
                </ul>
            </div>

            <div>
                <div className=' font-bold text-neutral-400 underline'>Social media</div>
                <ul className='grid grid-cols-2 gap-6 '> 
                <li><Link to="https://web.facebook.com/?_rdc=1&_rdr" target={'_blank'}  ><FontAwesomeIcon className='md:h-10 text-blue-500' icon={faFacebook} /></Link></li>
                <li><Link to="https://www.instagram.com/" target={'_blank'}  ><FontAwesomeIcon className='md:h-10 text-slate-400' icon={faInstagram} /></Link></li>
                <li><Link to="https://web.whatsapp.com/" target={'_blank'} ><FontAwesomeIcon className='md:h-10  text-green-500' icon={faWhatsapp} /></Link></li>
                <li><Link to="https://twitter.com/mainanorbert2" target={'_blank'} ><FontAwesomeIcon className='md:h-10  text-blue-500' icon={faTwitter} /></Link></li>


                </ul>
            </div>

        </div>
    )
}

export default Footer
