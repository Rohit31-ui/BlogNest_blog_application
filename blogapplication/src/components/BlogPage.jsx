import React, { useEffect, useState } from 'react';
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';

const BlogPage = () => {
  const [blog, setBlog] = useState([]); // Ensure it's initialized as an array
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

      if (selectedCategory) {
        url += `&category=${selectedCategory}`;
      }

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (Array.isArray(data)) {
          setBlog(data);
        } else {
          console.error("API response is not an array:", data);
          setBlog([]); // Fallback to empty array
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlog([]); // Ensure no undefined values
      }
    }

    fetchBlogs();
  }, [currentPage, pageSize, selectedCategory]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };

  return (
    <div>
      <div>
        {/* cateogy logic */}
        <CategorySelection onSelectcategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory}/>
      </div>

      <div className='flex flex-col lg:flex-row gap-12'>

        {/* blog card section */}
        <BlogCards blogs={blog} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />

        {/* sidebar section  */}

        <SideBar />
      </div>

      <div>
        {/* page No - to change the page*/}
        <Pagination onPageChange={handlePageChange} currentPage={currentPage} totalItems={blog.length} pageSize={pageSize} />
      </div>
    </div>
  );
};

export default BlogPage;
