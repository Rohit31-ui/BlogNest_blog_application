import React from 'react'
import ContactUs from '../components/ContactUs'

const Contact = () => {
  return (
    <div>
      <div className='px-4 py-40 text-center text-white bg-black'>
      <h2 className='mb-5 text-5xl font-bold leading-snug lg:text-7xl'>Contact Us Page</h2>
      </div>
      <div>
        <ContactUs/>
      </div>
    </div>
  )
}

export default Contact
