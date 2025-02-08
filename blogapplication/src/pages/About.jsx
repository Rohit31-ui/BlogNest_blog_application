import React from 'react'
import AboutUs from '../components/AboutUs'

const About = () => {
  return (
    <div>
      <div className='px-4 py-40 text-center text-white bg-black'>
      <h2 className='mb-5 text-5xl font-bold leading-snug lg:text-7xl'>About Us Page</h2>
      </div>

      <div>
        <AboutUs/>
      </div>
    </div>
  )
}

export default About
