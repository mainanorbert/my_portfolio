import React from 'react'
import images from '../images/images.png'
import tech from '../images/tech.webp'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Post from '../posts/Post'
import { useAuthContext } from '../../context/ContextProvider'
import axiosClient from '../../axios/AxiosClient'
import { useState, useEffect } from 'react'
import { DefaultPost } from '../posts/DefaultPost'

// import {Route, Link } from 'react-router-dom'

const Sidebar = () => {
  const [articles, setArticles] = useState([])
  const { mypost, setPosts, setPost } = useAuthContext()
  const [selectedPost, setSelectedPost] = useState(null)
  const [defaultPost, setDefaultPost] = useState(null)
  const [isPost, setIsPost] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const [author, setAuthor] = useState('')
  const [filter, setFilter] = useState('All')


  useEffect(() => {
    fetchArticles();
  }, [filter]);


  const fetchArticles = async () => {
    try {
      const response = await axiosClient.get('get/mypost');

      setArticles(response.data);
      setDefaultPost(response.data[0])



    } catch (error) {
      console.error(error);
    }
  };

 

  return (
    <>
      <div className='mt-1 md:px-2 md:flex block justify-center'>
        <div className={`${location.pathname === '/articles'? ' md:w-6/12 pl-10 bg-slate-400 ':''}`} >

          <p className='text-center md:text-2xl text-xl font-bold'>Tech Trending</p>
          <div className=' bg-transparent justify-center p-1 rounded-xl'>
            <select
              className='text-center w-6/12 h-6  bg-transparen border-none'
               name='filter'
            >
              <option value='All' >All Categories</option>
              <option value="Software Engineering" >Software Engineering</option>
              <option value="Web Development">Web Development</option>
              <option value="Cyber Security">Cyber Security</option>
              <option value="Artificial Intelligence" key="">Artificial Intelligence</option>
            </select>
          </div>
          {articles.map((post) => (
            <div className='border-b'>
              <div id={post.id} className='p-1 text-ce'>
                <img className='justify-center' src={images} alt="Tech Image" />
                <p className=' text-green-700 font-bold'>{post.title}</p>
                <p>|
                  {post.article.substring(0, 150)}
                </p>
                <Link to={`/articles/${post.id}`} className='text-blue-700 px-1'>Read More...</Link>
            </div>

            </div>
          ))}
      </div>

    </div >
    </>

  )
}

export default Sidebar
