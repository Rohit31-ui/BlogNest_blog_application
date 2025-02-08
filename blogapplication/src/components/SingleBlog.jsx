import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaUser, FaClock } from 'react-icons/fa';
import SideBar from './SideBar';

const SingleBlog = () => {
  const data = useLoaderData();
  const { title, image, category, author, published_date, reading_time, content } = data[0];

  return (
    <div>
      {/* Header Section */}
      <div className='px-4 py-40 text-center text-white bg-black'>
        <h2 className='mb-5 text-5xl font-bold leading-snug lg:text-7xl'>Single Blog Page</h2>
      </div>

      {/* Main Blog Layout (Flex) */}
      <div className='max-w-7xl mx-auto my-12 px-4 lg:px-0 lg:flex lg:gap-12'>

        {/* Left Section (Blog Content) */}
        <div className='lg:w-3/4'>
          {/* Blog Image */}
          <img src={image} alt="Blog" className='w-full mx-auto rounded-lg' />

          {/* Blog Title and Meta Info */}
          <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer'>{title}</h2>
          <p className='mb-3 text-gray-600 flex items-center'>
            <FaUser className='mr-2' /> {author} | {published_date}
          </p>
          <p className='mb-3 text-gray-600 flex items-center'>
            <FaClock className='mr-2' /> {reading_time}
          </p>
          <p className='text-base text-gray-500 mb-6'>{content}</p>

          {/* Blog Content */}
          <div className='text-base text-gray-500'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At, tempora provident, ratione cumque assumenda in vitae, quae exercitationem adipisci vero eaque ducimus veniam doloribus labore odit quasi incidunt harum quos?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolore nesciunt, corporis similique tempore rerum animi! Id ex nulla maxime sunt nam ullam harum, animi fugit quo architecto voluptatem aliquid!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, in ea corrupti culpa, quam distinctio quaerat nostrum asperiores optio quibusdam blanditiis nulla.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At, tempora provident, ratione cumque assumenda in vitae, quae exercitationem adipisci vero eaque ducimus veniam doloribus labore odit quasi incidunt harum quos?
            </p>
          </div>
        </div>

        {/* Right Section (Sidebar) */}
        <div className='lg:w-1/4 mt-8 lg:mt-0'>
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
