import React from 'react'
import passport from '../images/passport.jpg'

const Quote = () => {
  return (
    <div className='h-screen p-[5rem] px-[10rem]'>
<div className='text-center bg-slate-600 rounded-full'>
<p className='text-neutral-200 font-bold'>Get Motivated with Todays' Quote</p>
<div className=''>
<div className='overflow-auto pt-4 relative'> 
<img src={passport} alt="" className='w-[6rem] px-[] absolute left-4 rounded-full top-0' />
<p className='text-yellow-300 font-bold text-2xl'>Quote</p>
<p className='px-8 pl-[6rem]'>"If you look at what you have in life, you'll always have more. If you look at what
 you don't have in life, you'll never have enough.If you look at what you have in life, you'll always have more. If you look at what
 you don't have in life, you'll never have enough.If you look at what you have in life, you'll always have more. If you look at what
 you don't have in life, you'll never have enough. "</p>
 <p className='text-right pr-[4rem] pb-2'>~Oprah Winfrey</p>
</div>
<div></div>
</div>
</div>
    
    </div>
  )
}

export default Quote