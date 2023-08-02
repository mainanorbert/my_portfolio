import React, { useEffect } from 'react'
import Sidebar from '../main/Sidebar'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faWhatsapp, faIma } from '@fortawesome/free-brands-svg-icons';
import { useAuthContext } from '../../context/ContextProvider'
import tech from '../images/tech.gif'
import axiosClient from '../../axios/AxiosClient'
import { useLocation, useNavigate } from 'react-router-dom';

const Add = () => {
    const navigate = useLocation()
    const { userId } = useAuthContext()
    const [files, setFiles] = useState(0)
    const [error, setError] = useState('')
    const [isError, setIsError] = useState(false)

    const [payload, setPayload] = useState({
        title: '',
        article: '',
        category: '',
        user_id: userId
    })
    const handleInputChange = (event) => {
        const { name, value } = event.target;
       
        setPayload((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleChange = (e) => {

        setFiles(e.target.files.length);
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if (payload.title === '' || payload.article === '', payload.category === '') {
            setError('Fill all fields. Cannot Submit empty fields')
            setIsError(true)

        }

        console.log('payload:', userId)
        axiosClient.post('add/article', payload)
            .then((response) => {
                console.log('lff:', response)
                setError("You have successfully submitted an article")
                setIsError(true)
                setPayload({
                    title: '',
                    article: '',
                    category: '',
                    user_id: userId
                });
                navigate('/add/article')

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




    return (
        <div className='flex gap-7  bg-slate-300'>
            <div className='w-4/12 md:block hidden bg-slate-300 overflow-auto'> <Sidebar /></div>
            <div className='w-full h-scre bg-slate-400 p-3'>
                <p className='text-center md:text-2xl font-extrabold text-neutral-600'>Publish New Article</p>
                <form className='  place-items-center relativ md:p-4' onSubmit={handleSubmit}>
                    {isError && (<motion.div
                        animate={{
                            scale: [1, 2, 2, 1, 1],
                            rotate: [0, 0, 270, 270, 0],
                            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                        }}
                        className='absolute bg-red-600 p-1 md:w-6/12 w-11/12 rounded text-center text-white'>{error}</motion.div>)}
                    <div className='md:w-10/12'>
                        <div className='justify-center items-center px-8 space--1'>
                            <div className='flex justify-between'>
                                <label className='md:text-2xl font-semibold text-neutral-300'>Title</label>
                                <label className='md:text-2xl text-sm text-neutral-300 font-bold'>Choose Category</label>
                            </div>
                            <div className='flex space-x-1 '>
                                <input
                                    name='title'
                                    value={payload.title}
                                    onChange={handleInputChange}
                                    className='w-7/12 bg-slate-200 border focus:outline-none focus:border-none font-bold md:h-10 rounded-xl px-2' name='title' placeholder='Title...' type="text" />

                                <select defaultValue={payload.category} onChange={handleInputChange} name='category'
                                    className='focus:outline-none rounded-xl md:3/12 w-4/12 md:text-sm text-xs'
                                >
                                    <option value="">Select Category</option>
                                    <option value="Artificial Intelligence" >Artificial Intelligence</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="Computer Science">Cyber Security</option>
                                    <option value="Software Engineering">Software Engineering</option>
                                </select>
                            </div>
                        </div>
                        <div className='hidden'>
                            <label htmlFor='image' className='ml-2 text-4xl cursor-pointer text-blue-700' title='Upload FrontLine Image'>
                                <i class="fas fa-upload" ></i>
                                <i class="fas fa-image"></i>
                            </label>
                            <span className='text-xs text-neutral-400'>({files})photo</span>
                            <input type="file" id='image' name='image' className='hidden' onChange={handleChange} />
                        </div>

                        <div className='px-8 mt-2'>
                            <textarea className='w-full focus:outline-none p-2 border W rounded bg-slate-200 '
                                name='article'
                                value={payload.article}
                                onChange={handleInputChange}
                                type="text" cols="10" rows="15" placeholder='Type Your Article Here...'></textarea>
                        </div>


                        <div className='flex justify-center w-full'>
                            <button className='w-6/12 p-1 h-10 font-bold text-neutral-300 bg-green-400 hover:bg-green-500 rounded'>Post</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Add