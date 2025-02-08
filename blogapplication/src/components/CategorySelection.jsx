import React from 'react'

const CategorySelection = ({onSelectcategory,selectedCategory,activeCategory}) => {
  const categories = ["Apps","Startups","AI","Security","Tech"];

  
  return (
    <div className='flex flex-wrap items-center px-4 py-3 mb-8 font-semibold text-gray-900 border-b-2 shadow-xl lg:space-x-16'>
      <button 
        onClick={() => onSelectcategory(null)} 
        className={`lg:ml-12 cursor-pointer ${activeCategory === null ? "text-orange-500 font-bold" : ""}`}
      >All</button>
      {
        categories.map((category)=>(
          <button 
          onClick={() => onSelectcategory(category)}
          key={category} 
          className={`px-4 py-2 cursor-pointer ${activeCategory === category ? "text-orange-500 font-bold" : ""}`}
>
            {category}
          </button>
        ))
      }
    </div>
  )
}

export default CategorySelection
