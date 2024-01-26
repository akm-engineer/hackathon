// ProductList.js
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <table className="min-w-full bg-white border rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="border-b py-2">#</th>
            <th className="border-b py-2">Category</th>
            <th className="border-b py-2">MRP</th>
            <th className="border-b py-2">Product Name</th>
            <th className="border-b py-2">Status</th>
            <th className="border-b py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product._id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{product.category}</td>
              <td className="border px-4 py-2">{product.mrp}</td>
              <td className="border px-4 py-2">{product.productName}</td>
              <td className={`border px-4 py-2 ${product.status === 'active' ? 'text-green-600' : 'text-red-600'}`}>
                {product.status === 'active' ? 'Active' : 'Inactive'}
              </td>
              <td className="border px-4 py-2">
                <FaEdit className="cursor-pointer text-blue-500 mr-2" onClick={() => onEdit(product._id)} />
                <FaTrash className="cursor-pointer text-red-500" onClick={() => onDelete(product._id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
