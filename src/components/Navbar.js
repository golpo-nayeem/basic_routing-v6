import React from 'react'
import {NavLink} from 'react-router-dom'
export const Navbar = () => {
  return (
    <nav className='navbar'>
        <NavLink to='/'
        style={({isActive})=>{
            return{color:isActive?'red':'gray'}
        }}
        >Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/login'>Login</NavLink>
    </nav>
  )
}
