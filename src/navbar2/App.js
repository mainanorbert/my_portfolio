// import React, { useState } from 'react'
import Navbar from './main/Navbar'
import '../index.css'
import Home from './main/Home';
import { useRef } from 'react';
import About from './main/About';
import Contact from './main/Contact';
import Button from './Button';
import { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import Post from './posts/Post';
import Add from './forms/Add';
import Settings from './settings/Settings';
import Register from './users/Register';
import Login from './users/Login';
import { Route, Routes } from 'react-router-dom';
import Footer from './main/Footer.js';
// import {Switch} from 'react-router-dom'

const App = () => {
    const navRef = useRef()
    // const btnRef=useRef()
    const [hide, setHide] = useState(false)

    const showNav = () => {
        navRef.current.classList.toggle("hidden")
        // btnRef.current.classList.toggle('text-blue-500')
        setHide(!hide)
    }

    // const linkRedirect=()=>{
    //     return (
    //         <div>
    //         <Redirect to='https://www.instagram.com/' />
    //         </div>
    //     )
    // }


    const user = true


    return (

        <>


            <div className='sticky w-full top-0 z-10'><Navbar /> </div>

            <Routes className="z-0">
                <Route path='/' element={<Home />} />
                <Route path='/articles' element={<Post />} />
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/add/article' element={user ? <Add /> : <Register />} />
                <Route path='/register' element={user ? <Home /> : <Register />} />
                <Route path='/login' element={user ? <Home /> : <Login />} />
                <Route path='/post' element={<Post />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/profile' element={<Post />} />
            </Routes>


            <div>
                <Footer />
            </div>



        </>

    )
}
// <Button btnClick={()=>setHide(!hide)} />


export default App
