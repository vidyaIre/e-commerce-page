import React from 'react'
import { Link } from 'react-router-dom';

const Header = ({cartCount}) => {
  return (
   <nav className='navbar navbar-dark bg-dark'>
    <Link className='navbar-brand m-4' to="/">My Botique</Link>
    <Link className='text-light m-4' to={'/cart'}>Cart({cartCount})</Link>
   
    
   </nav>
  )
}

export default Header