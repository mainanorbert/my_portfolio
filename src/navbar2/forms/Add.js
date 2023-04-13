import React from 'react'
import Sidebar from '../main/Sidebar'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faWhatsapp, faIma } from '@fortawesome/free-brands-svg-icons';

import tech from '../images/tech.gif'

const Add = () => {

    const [files, setFiles] = useState(0)

    const handleChange = (e) => {

        setFiles(e.target.files.length);
    }

    return (
        <div className='flex gap-7  bg-slate-300'>
            <div className='w-4/12'> <Sidebar /></div>
            <div className='w-full'>
                <p className='text-center md:text-2xl font-extrabold text-neutral-600'>Publish New Article</p>
                <div><img src={tech} className="w-[10rem] h-[6rem]" alt="" /></div>
                <form className='  place-items-center  '>
                    <div className=" place-items-center md:w-10/12">
                        <div className='my-1 w-full'>
                            <label className='text-2xl font-semibold text-green-600'>Title</label>
                            <div className='flex justify-center items-center'>
                                <input className='w-full bg-transparent border focus:outline-none focus:border-none font-bold h-10 rounded-xl px-2' placeholder='Title...' type="text" />
                                <label htmlFor='image' className='ml-2 text-4xl cursor-pointer text-blue-700' title='Upload FrontLine Image'>
                                    <i class="fas fa-upload" ></i>
                                    <i class="fas fa-image"></i>
                                </label>
                                <span className='text-xs text-neutral-400'>({files})photo</span>
                                <input type="file" id='image' name='image' className='hidden' onChange={handleChange} />
                            </div>
                        </div>
                        <textarea className='w-full p-2 border W rounded bg-transparent '
                            type="text" cols="30" rows="15" placeholder='Type Your Article Here...'></textarea>

                    </div>
                    <div className='flex justify-center w-full'>
                        <button className='w-6/12 p-1 h-10 font-bold text-neutral-300 bg-green-400 hover:bg-green-500 rounded'>Post</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Add