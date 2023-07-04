import React, { useState } from 'react'
import quotes from './MyQuotes'
import { Link } from 'react-router-dom';
const Quote = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {

    { (index === quotes.length - 1) ? setIndex(0) : (setIndex(index + 1)) }
  }
  let myquotes = quotes[index];
  return (
    <div className='h-screen p-[5rem] px-[15rem] bg-blue-400'>
      <div>
        <Link to="/" className='' title='Go Home'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="4" stroke="green" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </Link>
      </div>

      <div className='text-center p-[2rem] h-[18rem] bg-slate-600 rounded-full'>
        <div className='justify-center grid grid-cols-5 rounded-full mr-2'>
          <p className='text-2xl rounded-full col-span-4  text-center ml-8 font-bold text-yellow-300'>Todays' Quote</p>
          <button className='rounded-full font-bold text-white mr-3 text-xl cursor-pointer py-2 pt-2 bg-green-300 text-center'
            onClick={handleNext}
          >New Quote</button>
        </div>
        <div className=''>
          <div className='overflow-auto pt-4 relative'>
            <img src={myquotes.image} alt="" className='w-[8rem] h-[8rem] absolute left-4 rounded-full top-0' />
            <p className='px-12 pl-[10rem]'>{myquotes.quote}</p>
            <p className='text-right pr-[4rem] pb-4 text-yellow-300'>~ {myquotes.name}</p>
          </div>
          <div></div>
        </div>
      </div>

    </div>
  )
}

export default Quote