import React, { useEffect } from 'react'
import Sidebar from '../main/Sidebar'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faWhatsapp, faIma } from '@fortawesome/free-brands-svg-icons';
import { useAuthContext } from '../../context/ContextProvider'
import tech from '../images/tech.gif'
import axiosClient from '../../axios/AxiosClient';
import { useParams } from 'react-router-dom';


const Add = () => {
    const { userId, editPost } = useAuthContext()
    const [files, setFiles] = useState(0)
    const [error, setError] = useState('')
    const [isError, setIsError] = useState(false)
    const {postId} = useParams()
    const [post, setPost] = useState([])
    const [payload, setPayload] = useState({
        title: '',
        article: '',
        category: '',
        user_id:'',
        post_id: postId
    })
    const handleInputChange = (event) => {
        const { name, value } = event.target;
       
        setPayload((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const fetchArticles = async () => {
        try {
          const response = await axiosClient.get(`articles/${postId}`);         
          setPost(response.data)
          console.log(response.data);
          setPayload({
            title: response.data.title,
            article: response.data.article,
            category: response.data.category,
            user_id:response.data.user_id,
            post_id: postId
        });
        
     
        } catch (error) {
          console.error(error);
        }
      };
      useEffect(()=>{
        fetchArticles();
      }, [])
      
    
    const handleChange = (e) => {

        setFiles(e.target.files.length);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (payload.title === '' || payload.article === '' || payload.category === '') {
            setError('Fill all fields. Cannot Submit empty fields')
            setIsError(true)
        }
        console.log('edit', payload)
        axiosClient.post('edit/article/', payload)
            .then((response) => {
                console.log('lffdddddd:', response)
                setError("You have successfully Edited an article")
                setIsError(true)
                setPayload({
                    title: '',
                    article: '',
                    category:'',
                    post_id: postId,
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
  
    return (
        <div className='flex gap-7  bg-slate-300'>
            <di v className='w-4/12 md:block hidden bg-slate-300 overflow-auto'> <Sidebar /></di>
            <div className='w-full h-scre bg-slate-300 p-3'>
           
                <p className='text-center md:text-2xl font-extrabold text-neutral-600'>Publish New Article</p>
                <form className='  place-items-center relative  p-4' onSubmit={handleSubmit}>
                    {isError && (<motion.div
                        animate={{
                            scale: [1, 2, 2, 1, 1],
                            rotate: [0, 0, 270, 270, 0],
                            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                        }}
                        className='absolute bg-red-600 p-1 w-6/12 rounded text-center text-white'>{error}</motion.div>)}
                    <div className='md:w-10/12 '>
                        <div className='justify-center items-center px-8 space--1'>
                            <div className='flex justify-between'>
                                <label className='md:text-2xl font-semibold text-green-600'>Title</label>
                                <label className='text-green-600 font-bold'>Choose Category</label>
                            </div>
                            <div className='flex space-x-1'>
                                <input
                                    name='title'
                                    value={payload.title}
                                    onChange={handleInputChange}
                                    className='w-full bg-slate-200 border focus:outline-none focus:border-none font-bold md:h-10 h-6  rounded-xl px-2' name='title' placeholder='Title...' type="text" />

                                <select value={payload.category} onChange={handleInputChange}  name='category'  
                                    className='focus:outline-none rounded-xl md:w-4/12 6/12'>
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
                            <textarea className='w-full p-2 border W rounded bg-slate-200 '
                                name='article'
                               
                                value={payload.article}
                                onChange={handleInputChange}
                                type="text" cols="10" rows="15" placeholder='Type Your Article Here...'></textarea>
                        </div>


                        <div className='flex justify-center w-full'>
                            <button className='w-6/12 p-1 h-10 font-bold text-neutral-300 bg-green-400 hover:bg-green-500 rounded'>Edit</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Add