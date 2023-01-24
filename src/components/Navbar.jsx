import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import * as Fa from 'react-icons/fa'
import {AiOutlineLineChart, AiOutlineBars} from 'react-icons/ai'

const Navbar = () => {
    return (
        <nav id='home'>
            <span className='logo'>
               <AiOutlineLineChart /> CrypTrack.io
            </span>
            <span className="bars"><AiOutlineBars /> </span>
            <span className='flex hide'>

            <Link to="/" className='link'>
                Home
            </Link>
            <Link to="/stats" className='link'>
              Stats
            </Link>
            <Link to="/resources" className='link'>
              Resources <Fa.FaSortDown className='nav-color'/>
            </Link>
            <Link to="/company" className='link'>
              Company <Fa.FaSortDown />
            </Link>
            <Link to="/accounts" className='link'>
              Accounts <Fa.FaSortDown/>
            </Link>
            </span>
        </nav>
    )
}

export default Navbar