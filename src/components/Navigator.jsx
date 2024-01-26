import React from 'react'
import { FaHome, FaList, FaShoppingBag } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navigator = () => {
  return (
    <div>
      {/* Home */}
      <div className="flex items-center space-x-2 cursor-pointer hover:bg-yellow-200 p-2">
          <FaHome className="text-gray-800" />
          <Link to="/home">Home</Link>
        </div>

        {/* Category */}
        <div className="flex items-center space-x-2 cursor-pointer hover:bg-yellow-200 p-2">
          <FaList className="text-gray-800" />
          <Link to="/category">Category</Link>
        </div>

        {/* Products */}
        <div className="flex items-center space-x-2 cursor-pointer hover:bg-yellow-200 p-2">
          <FaShoppingBag className="text-gray-800" />
          <Link to="/products">Products</Link>
        </div>
    </div>
  )
}

export default Navigator
