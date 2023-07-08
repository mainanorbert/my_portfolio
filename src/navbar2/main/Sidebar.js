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
  const { mypost, setPosts } = useAuthContext()
  const [selectedPost, setSelectedPost] = useState(null)
  const [defaultPost, setDefaultPost] = useState(null)
  const [isPost, setIsPost] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const [author, setAuthor] = useState('')
  const [filter, setFilter] = useState('All')

  console.log('iii', filter)
  const handleReadMore = (post) => {
    setSelectedPost(post)
    console.log(post.user_id)
    const payload = {
      user_id: post.user_id
    }
    axiosClient.get(`/users/${post.user_id}`)
      .then((response) => {
        console.log('myu:', response.data.name)
        setAuthor(response.data.name)
      })
    setIsPost(true)
    navigate('/articles')
  }

  useEffect(() => {
    fetchArticles();
  }, [filter]);


  const fetchArticles = async () => {
    try {
      // if (filter === 'All') {
        const response = await axiosClient.get('get/mypost');

        setArticles(response.data);
        setDefaultPost(response.data[0])

      // }
      // else {
      //   const response = await axiosClient.get(`get/mypost?category=${filter}`)
      //   setArticles(response.data);
      //   setDefaultPost(response.data[0])

      // }

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    // Initial check on component mount
    handleResize();

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const handleOptionChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <>
      <div className='w-ful justify-between bg-green-00 z-0 h-screen mt-1 md:px-2 md:flex '>
        <div className={`${location.pathname === '/articles' ? 'md:w-4/12 overflow-y-auto bg-slate-300' : 'bg-slate-300'}`} >
          <p className='text-center md:text-2xl text-xl font-bold'>Tech Trending</p>
          <div className='justify-center bg-transparent rounded flex text-sm space-x-1'>
            <div>Select Categories</div>
            <select
              className='text-center'
              value={filter} onChange={handleOptionChange} name='filter'
            >
              <option value='All' >All Categories</option>
              <option value="Software Engineering" >Software Engineering</option>
              <option value="Web Development">Web Development</option>
              <option value="Cyber Security">Cyber Security</option>
              <option value="Artificial Intelligence" key="">Artificial Intelligence</option>
            </select>


          </div>
          {articles.map((post) => (
            <div className={`${isPost && isMobile ? 'hidden' : ''}`}>
              <div id={post.id} className='p-1 text-ce'>
                <img className='justify-center' src={images} alt="Tech Image" />
                <p className=' text-green-700 font-bold'>{post.title}</p>
                <p>|
                  {post.article.substring(0, 100)}
                </p>
                <button className='text-blue-700 px-1'

                  onClick={() => handleReadMore(post)}
                >Read More...</button>
              </div>

            </div>
          ))}
        </div>
        {location.pathname === '/articles' ? <div className='md:w-8/12  m-'>{isPost ? <Post author={author} post={selectedPost} /> : <DefaultPost />}</div> : ''}
      </div>
    </>

  )
}

export default Sidebar
