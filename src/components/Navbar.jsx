import React from 'react'
import SignUp from './SignUp'
import { Link } from 'react-router-dom';
import SignIn from './SignIn';

function Navbar() {
  
  return (
    <div className='flex p-4 justify-between items-center bg-slate-800 text-2xl text-white'>
      <Link to="#">Logo</Link>
        <div className='flex gap-4'>
         <Link to="/signup">Signup</Link>
         <Link to="/signin">Login</Link>
        </div>
    </div>
  )
}

export default Navbar