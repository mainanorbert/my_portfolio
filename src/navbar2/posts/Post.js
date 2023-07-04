import React, { useEffect, useState } from 'react'
import Sidebar from '../main/Sidebar'
import axiosClient from '../../axios/AxiosClient'
import { Link } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/ContextProvider'


const Post = ({ post, author }) => {
    const location = useLocation()
    const navigate = useNavigate()
    const postCreated = new Date(post.created_at).toLocaleDateString()

    const [title, setTitle] = useState('')
    const [num, setNum] = useState(0)
    const { mypost, setEditPost } = useAuthContext()
    const [deleteMessage, setDeleteMessage] = useState()
    const [editId, setEditId] = useState();
    const [users, setUsers] = useState('')


    const handleDeleteArticle = () => {
        const payload = {
            userId: post.user_id
        }
        axiosClient.delete(`/delete/article/${post.id}`)
            .then((response) => {
                // console.log('dele:', )
                setDeleteMessage(response.data.message)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const handleEdit = () => {
        axiosClient.get(`edit/article/${post.id}`)
            .then((response) => {
                console.log('editt: ', response.data)
                setEditPost(response)
                navigate('/edit')
            })
            .catch((error) => {
                console.log(error)

            })
    }

    
    //     const payload = {
    //         user_id: post.user_id
    //     }
    //     axiosClient.get('/users', payload)
    //     .then((response) => {
    //         console.log('users:', response.data)
    //         setUsers(response.data)
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })

    // console.log('ui', post.user_id)

  
       
   

    return (

        <div className='w-full relative overflow-y-aut px-10'>
            {deleteMessage ? <div className='absolute text-center bg-red-500 text-lg text-white rounded w-8/12 h-9'>{deleteMessage}</div> : ''}
            <div className='p-2 text-center text-slate-800 text-2xl font-bold'>
                {post.title}
            </div>
            <div className=' w-10/12'>
                <div className='bg-green-500 hover:bg-green-600 cursor-pointer hover:text-neutral-300 text-xs rounded p-1  inline-block'>
                <i className='text-sm'>Created on:</i> {postCreated} | <i className='underline '>Author:</i> {author} </div>
            </div>
            <pre className='text- bg-green-300 p-1 w-full'>{post.article}</pre>

            <div className='flex justify-end space-x-2'>
                <button className='flex' title="Edit this article" onClick={handleEdit}>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                </button>
                <button className='flex' title="Delete this article" onClick={handleDeleteArticle}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Post
