import React from 'react';

const Pagination = ({ onPageChange, currentPage, totalItems, pageSize }) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  if (totalPages <= 1) return null; // Hide pagination if only one page exists

  return (
    <ul className="flex flex-wrap items-center justify-center p-0 m-0 my-8 list-none">
      <li>
        <button 
          onClick={() => onPageChange(currentPage - 1)} 
          disabled={currentPage === 1} 
          className="px-4 py-2 mx-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
      </li>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
        <li key={pageNumber}>
        <button 
          className={`inline-block px-5 py-2 rounded-4xl decoration-none hover:bg-gray-300 ${
            pageNumber === currentPage ? "text-orange-500 font-bold" : "text-black"
          }`} 
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      </li>
      ))}
      <li>
        <button 
          onClick={() => onPageChange(currentPage + 1)} 
          disabled={currentPage === totalPages} 
          className="px-4 py-2 mx-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
