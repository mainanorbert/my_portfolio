import sculptureList from "./Sculpture";
import { useState } from "react";

import "../index.css"
import { isDisabled } from "@testing-library/user-event/dist/utils/misc/isDisabled";


const App = () => {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const handleNextClick = () => {
    setIndex(index + 1);
  }
  const handlePrevClick=()=>{
  setIndex(index-1)
  {index<0?setIndex(sculptureList.length):setIndex(index-1)}
    
  }
  const handleMoreClick = () => {
    setShowMore(!showMore);
  }
  let sculpture = sculptureList[index];
  return (
    <div className="flex justify-center bg-slate-400 " >
  {<div className="w-4/12 bg-slate-700 m-2 p-2">
  <p className="text-center text-neutral-200 text-xl font-bold">Details of Historical Sculpture</p>
  <div className="flex justify-between font-bold text-neutral-300 my-8">
    <button className="text-2xl " onClick={index !=0? handlePrevClick:isDisabled}>prev</button>
    <button className=" text-2xl" onClick={index!=sculptureList.length-1? handleNextClick:isDisabled}>next</button>
    
  </div>
  <div className="">
      <p className="pl-8 text-neutral-300 font-semibold"><span className="mr-2 font-extrabold">Name:</span>{sculpture.name}:
       <span className="flex justify-between">
       
       <span>{index+1} of {sculptureList.length}</span>
     
       </span>
       </p>
      <p className="text-center text-green-400 font-bold text-xl underline">
      <span className="font-semibold text-yellow-600 pr-8 no-underline text-2xl"> By</span>{sculpture.artist}</p>
    </div>
    <div>
    <button className="bg-green-400 p-1 rounded m-1 text-neutral-300 font-bold" onClick={handleMoreClick}>{showMore? 'Hide ':'Show '}Description</button>

    <p className="rounded bg-slate-300">{showMore && <p>{sculpture.description}</p>}</p>


    </div>

    <div className="flex justify-center pt-1">
    <img className="w-[20rem] h-[20rem]" src={sculpture.url} alt={sculpture.alt} />
    </div>

</div>}

    </div>
  )
}

export default App