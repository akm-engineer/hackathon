import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = 'http://localhost:8000';

const Category = () => {
  const [categoryName, setCategoryName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories when the component mounts
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/category/all`);
      if (response && response.data) {
        setCategories(response.data);
      }
    } catch (error) {
      console.error('Error fetching categories:', error.response?.data?.error || error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${apiUrl}/api/category/create`, {
        categoryName,
        description,
        status,
      });

      if (response && response.data) {
        console.log('Category saved successfully:', response.data);

        
        setCategories([...categories, response.data]);

        
        setCategoryName('');
        setDescription('');
        setStatus('');
      } else {
        console.error('Invalid response format:', response);
      }
    } catch (error) {
      console.error('Error saving category:', error.response?.data?.error || error.message);
    }
  };
  

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Add Category</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700">
            Category Name
          </label>
          <input
            type="text"
            id="categoryName"
            name="categoryName"
            className="mt-1 p-2 border rounded-md w-full"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="3"
            className="mt-1 p-2 border rounded-md w-full"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            id="status"
            name="status"
            className="mt-1 block w-full border rounded-md p-2"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="">Select Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Save Category
        </button>
      </form>

      {/* Display Categories in a Table */}
      <div className="mt-8">
  <h2 className="text-2xl font-bold mb-4">Categories</h2>
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white border rounded">
      <thead className="bg-gray-200">
        <tr>
          <th className="border-b py-2">#</th>
          <th className="border-b py-2">Name</th>
          <th className="border-b py-2">Description</th>
          <th className="border-b py-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category, index) => (
          <tr key={category._id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
            <td className="border px-4 py-2">{category._id}</td>
            <td className="border px-4 py-2">{category.categoryName}</td>
            <td className="border px-4 py-2">{category.description}</td>
            <td className={`border px-4 py-2 ${category.status === 'active' ? 'text-green-600' : 'text-red-600'}`}>
              {category.status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    </div>
  );
};

export default Category;
