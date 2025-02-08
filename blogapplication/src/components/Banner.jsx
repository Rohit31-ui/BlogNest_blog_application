import React from 'react'
import { Link } from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa6'
const Banner = () => {
  return (
    <div className='px-4 py-32 mx-auto bg-black '>
        <div className='text-center text-white'>
             <h1 className='mb-5 text-5xl font-bold leading-snug lg:text-7xl'>Welcome to our Blog</h1>
             <p className='mx-auto mb-5 text-gray-100 lg:w-3/5'>Start your blog today and join a community of writers and readers who are passionate about
                sharing their stories and ideas. We offer everything you need to get started, from helpful tips and tutorials.
             </p>

             <div>
                <Link to="/" className='inline-flex items-center py-1 font-medium jus hover:text-orange-500'>Learn More <FaArrowRight className='mt-1 ml-2'/> </Link>
             </div>
             
        </div>
      
    </div>
  )
}

export default Banner
