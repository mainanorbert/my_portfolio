import React, { useEffect } from 'react'
import Sidebar from '../main/Sidebar'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faWhatsapp, faIma } from '@fortawesome/free-brands-svg-icons';
import { useAuthContext } from '../../context/ContextProvider'
import tech from '../images/tech.gif'
import axiosClient from '../../axios/AxiosClient';

const Add = () => {
    const { userId, editPost } = useAuthContext()
    const [files, setFiles] = useState(0)
    const [payload, setPayload] = useState({
        title: editPost.data.title,
        article: editPost.data.article,
        post_id:editPost.data.id,
        user_id: userId
    })
    const [error, setError] = useState('')
    const [isError, setIsError] = useState(false)

    const handleChange = (e) => {

        setFiles(e.target.files.length);
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if (payload.title === '' || payload.article === '') {
            setError('Fill all fields. Cannot Submit empty fields')
            setIsError(true)

        }

        console.log(payload)
        axiosClient.post('edit/article/', payload)
            .then((response) => {
                console.log('lffdddddd:',response)
                setError("You have successfully Edited an article")
                setIsError(true)
                setPayload({
                    title: '',
                    article: '',
                    post_id: editPost.data.id,
                    user_id:userId
                });

            })
            .catch(({ error }) => {
                console.log(error)
            })

    }
    useEffect(() => {
        if (isError) {
            const timer = setTimeout(() => {
                setIsError(false)

            }, 5000);
            return () => clearInterval(timer)
        }
    }, [isError])

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPayload((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
console.log('eed',editPost.data.id)

    return (
        <div className='flex gap-7  bg-slate-300'>
            <div className='w-4/12 md:block hidden'> <Sidebar /></div>
            <div className='w-full'>
                <p className='text-center md:text-2xl font-extrabold text-neutral-600'>Publish New Article</p>
                <div><img src={tech} className="w-[10rem] h-[6rem]" alt="" /></div>
                <form className='  place-items-center relative  ' onSubmit={handleSubmit}>
                    {isError && (<motion.div
                        animate={{
                            scale: [1, 2, 2, 1, 1],
                            rotate: [0, 0, 270, 270, 0],
                            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                        }}
                        className='absolute bg-red-600 p-1 w-6/12 rounded text-center text-white'>{error}</motion.div>)}
                    <div className=" place-items-center md:w-10/12">
                        <div className='my-1 w-full'>
                            <label className='text-2xl font-semibold text-green-600'>Title</label>
                            <div className='flex justify-center items-center'>
                                <input
                                    name='title'
                                    value={payload.title}
                                    onChange={handleInputChange}
                                    className='w-full bg-transparent border focus:outline-none focus:border-none font-bold h-10 rounded-xl px-2' name='title' placeholder='Title...' type="text" />
                                <label htmlFor='image' className='ml-2 text-4xl cursor-pointer text-blue-700' title='Upload FrontLine Image'>
                                    <i class="fas fa-upload" ></i>
                                    <i class="fas fa-image"></i>
                                </label>
                                <span className='text-xs text-neutral-400'>({files})photo</span>
                                <input type="file" id='image' name='image' className='hidden' onChange={handleChange} />
                            </div>
                        </div>
                        <textarea className='w-full p-2 border W rounded bg-transparent '
                            name='article'
                            value={payload.article}
                            onChange={handleInputChange}
                            type="text" cols="10" rows="15" placeholder='Type Your Article Here...'></textarea>

                    </div>
                    <div className='flex justify-center w-full'>
                        <button className='w-6/12 p-1 h-10 font-bold text-neutral-300 bg-green-400 hover:bg-green-500 rounded'>Update</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Add