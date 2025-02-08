import React from 'react'
import BlogPage from '../components/BlogPage'

const Blogs = () => {
  return (
    <div>
      <div className='px-4 py-40 text-center text-white bg-black'>
      <h2 className='mb-5 text-5xl font-bold leading-snug lg:text-7xl'>Blog Page</h2>
      </div>

      <div className='mx-auto max-w-7xl'>
        <BlogPage/>
        
      </div>
    </div>
  )
}

export default Blogs


