import React from 'react'
import images from '../images/images.png'
import tech from '../images/tech.webp'
import { Link } from 'react-router-dom'

// import {Route, Link } from 'react-router-dom'

const Sidebar = () => {

  
  return (
    
    <div className='w-full overflow-y-auto z-0 bg-green-700 mt-1 md:px-2'>
    <p className='text-center text-neutral-300 md:text-2xl font-bold'>Tech Trending</p>
    <div className='flex w-full justify-center'>
      <div className='bg-slate-300 p-1 text-ce'>
        <img className='justify-center' src={images} alt="Tech Image" />
        <p className=' text-green-700 font-bold'>Tech Roadmap</p>
        <p>Beginning a career in tech requires resilience, determination, but most importantly consistency
        
          <Link className='text-blue-700 px-1' to="/post">Read More...</Link></p>
      </div>
    </div>
    <div className='flex w-full justify-center'>
      <div className='bg-slate-300 p-1'>
        <img className='justify-center' src={tech} alt="" />
        <p className='text-green-700 font-bold'>Why a Career in Tech (20th Century) </p>
        <p>Beginning a career in tech requires resilience, determination, but most importantly consistency
         <Link className='px-1 text-blue-700' to="/post">Read More...</Link>
          </p>
      </div>
      
    </div>
    <div className='flex w-full justify-center'>
      <div className='bg-slate-300 p-1'>
        <img className='justify-center' src={tech} alt="" />
        <p className='text-center text-green-700 font-bold'>Why a Career in Tech (20th Century) </p>
        <p>Beginning a career in tech requires resilience, determination, but most importantly consistency
          <a className='text-blue-700 px-1' href="">Read More...</a></p>
      </div>
      
    </div>
  </div>
      
   
  )
}

export default Sidebar
