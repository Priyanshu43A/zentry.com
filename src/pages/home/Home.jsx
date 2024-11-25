import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center w-screen min-h-screen p-10'>
        <h1 className='text-4xl font-bold'>Welcome to OyeKalakar</h1>
        <div className="nav-links block mt-20 mx-auto">
            <Link className='font-semibold text-xl ' to='/login'>Login</Link>
            <Link className='font-semibold text-xl ' to='/signup'>Signup</Link>
        </div>
    </div>
  )
}

export default Home;