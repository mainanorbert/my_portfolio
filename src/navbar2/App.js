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
import Quote from './others/Quote';
import { useAuthContext } from '../context/ContextProvider';
import Sidebar from './main/Sidebar';
import EditPost from './forms/EditPost';
import Draft from './forms/Draft';
// import {Switch} from 'react-router-dom'

const App = () => {
    const { token, user } = useAuthContext()
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


    // const user = false


    return (

        <div className='h-sceen'>


            <div className='sticky w-full top-0 z-10'><Navbar /> </div>
            <div className='h-[40rem] overflow-auto'>
                <Routes className="z-0">
                    <Route path='/' element={<Home />} />
                    <Route path='/articles' element={<Sidebar />} />
                    <Route path='/edit' element={<EditPost />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/add/article' element={user.email !='mainanorbert@gmail.com' ? <Contact /> : <Add />} />
                    <Route path='/register' element={token ? <Home /> : <Register />} />
                    <Route path='/login' element={token ? <Home /> : <Login />} />
                    <Route path='/articles' element={<Post />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/post' element={<Post />} />
                    <Route path='/quotes' element={<Quote />}></Route>
                    <Route path='/draft' element={<Draft />}></Route>
                </Routes>

            </div>
            <div className='bottom-0 fixe w-full'>
                <Footer />
            </div>



        </div>

    )
}
// <Button btnClick={()=>setHide(!hide)} />


export default App
