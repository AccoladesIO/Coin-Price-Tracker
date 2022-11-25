import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import {AiOutlineLineChart} from 'react-icons/ai'

const Navbar = () => {
    return (
        <nav>
            <span className='logo'>
               <AiOutlineLineChart /> CrypTrack.io
            </span>
            <span className='flex'>

            <Link to="/" className='link'>
                Home
            </Link>
            <Link to="/stats" className='link'>
              Stats
            </Link>
            </span>
        </nav>
    )
}

export default Navbar