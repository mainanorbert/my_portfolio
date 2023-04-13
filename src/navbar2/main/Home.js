import React from 'react'
import Display from '../pages/Display'

import Sidebar from './Sidebar'
import Categories from '../pages/Categories'

const Home = () => {
  return (
    <div className='flex md:gap-0 gap-0.5 z-0 h-screen overflow-y-auto'>
      <div className='md:w-4/12 w-4/12 text-sm z-0 overflow-y-auto'><Sidebar /></div>
      <div className='w-full bg-green bg-slate-100 md:ml-2 z-0'><Display /></div>

      <div className='w-3/12  z-0 pt-[6rem] pl-4'>
      <Categories/>
      </div>



    </div>
  )
}

export default Home
