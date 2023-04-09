import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <div className='container'>
      <div className='nav'>
        <NavLink to='/' className='Home'>Home</NavLink>
        <NavLink to='students' className='student'>Students</NavLink>
        <NavLink to='contact' className='contact'>Contact</NavLink>
      </div>
    </div>
      
    </div>
  )
}

export default Navbar
