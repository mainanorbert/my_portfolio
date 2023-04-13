import React from 'react'
import '../index.css'
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'
import About from './About'
import Home from './Home'

import Myapp from './Myapp'

const Nav = () => {
  return (
<Router>
    <div className='text-center'>
    <Route path='/home' component={Home} />
    <Route path='/about' component={About}/>
    
    <Myapp/>
    <About/>
    <Home/>



    

    </div>
    </Router>
   
  )
}

export default Nav