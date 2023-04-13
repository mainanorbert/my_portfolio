import React from 'react'
import { Link } from 'react-router-dom'




const Header = () => {

    return (
        <nav className='flex gap-4 text-neutral-300 font-bold '>

            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>

        </nav>
    )
}

export default Header