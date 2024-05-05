import React from 'react'
import { Link } from 'react-router-dom'
import  logo  from "../assets/images/logo.png"

function Navbar() {
  
  return (
    <div className='flex p-4 justify-between items-center bg-slate-700 text-2xl text-white'>
      <Link to="/"><img className='w-14 h-14' src={logo} /></Link>
        <div className='flex gap-4'>
         <Link className='md:text-lg text-base border-slate-100 border px-4 py-1 rounded-md hover:text-slate-400 font-semibold uppercase' to="/signup">Signup</Link>
         <Link className='md:text-lg text-base border-slate-100 border px-4 py-1 rounded-md hover:text-slate-400 font-semibold uppercase' to="/signin">Login</Link>
        </div>
    </div>
  )
}

export default Navbar