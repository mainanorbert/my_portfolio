import React from 'react'
import passport from '../images/download.jpg'

function Display() {
  return (
    <div className=''>

    <div className='flex justify-center pt-1 relative'>
    <img className=' md:w-10/12 md:mr-[rem] h-[35rem] justify-center object-cover' src={passport} alt="" />
    <p className='absolute md:text-3xl text-xl w-full text-center text-neutral-200 font-bold'>NoberTechx Hub</p>
    </div>
    

    </div>
  )
}

export default Display