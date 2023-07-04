import React from 'react'
import Display from '../pages/Display'

import Sidebar from './Sidebar'
import Categories from '../pages/Categories'

const Home = () => {
  return (
    <div className='md:flex md:gap-0 gap-0.5 z- h-scre'>
      <div className='w-4/12 md:block hidden overflow-y-auto h'><Sidebar /></div>
      <div className='w-full bg-green bg-slate-100 md:ml-2 z-0'><Display /></div>
      <div className='md:w-4/12 w-full md:hidden text-sm z-0 overflow-y-auto'><Sidebar /></div>
      <div className='md:w-3/12  z-0 pt-[2rem] pl-4'>
        <Categories />
      </div>



    </div>
  )
}

export default Home
