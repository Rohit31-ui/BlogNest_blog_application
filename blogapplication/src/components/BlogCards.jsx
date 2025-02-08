import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const BlogCards = ({ blogs = [], currentPage, pageSize, selectedCategory }) => {

  const filteredBlogs = blogs
    .filter((blog) => !selectedCategory || blog.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {filteredBlogs.length > 0 ? (
         filteredBlogs.map((blog) => (
          
          
          <Link key={blog.id} to={`/blog/${blog.id}`} className="p-5 rounded shadow-lg cursor-pointer">
            <div>
              <img src={blog.image || "default-image.jpg"} alt={blog.title || "Blog Image"} className="object-cover w-full h-40 rounded-md" />
            </div>
            <h2 className="mt-4 mb-2 text-lg font-semibold cursor-pointer hover:text-blue-600">{blog.title}</h2>
            <p className="mb-2 text-gray-600">
              <FaUser className="inline-flex items-center mr-2" /> {blog.author || "Unknown"}
            </p>
            <p className="text-sm text-gray-500">Published: {blog.published_date || "N/A"}</p>
          </Link>
          
        ))
      ) : (
        // if we have do not get any blogs
        <p className="col-span-3 text-center">No blogs available.</p>
      )}
    </div>
  );
};

export default BlogCards;
