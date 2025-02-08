import React from 'react'
import ServiceComponent from '../components/ServiceComponent'


const Services = () => {
  return (
    <div>
      <div className='px-4 py-40 text-center text-white bg-black'>
      <h2 className='mb-5 text-5xl font-bold leading-snug lg:text-7xl'>Service Page</h2>
      </div>

      <div>
        <ServiceComponent/>
      </div>
    </div>
  )
}

export default Services
