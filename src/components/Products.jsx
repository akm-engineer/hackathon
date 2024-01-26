// Product.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ProductList from './ProductList';

const apiUrl = 'http://localhost:8000';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [mrp, setMrp] = useState('');
  const [productName, setProductName] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProductImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newFormData = {
      category,
      mrp,
      productName,
      productImage,
      status,
    };
    if (productImage) {
      newFormData.productImage = {
        name: productImage.name,
        size: productImage.size,
        type: productImage.type,
      };
    }

    // Log form data to the console
    console.log(newFormData);

    setFormData(newFormData);

    // Uncomment the API request code once you are ready to submit the actual data
    // try {
    //   const formData = new FormData();
    //   formData.append('category', category);
    //   formData.append('mrp', mrp);
    //   formData.append('productName', productName);
    //   formData.append('status', status);

    //   if (productImage) {
    //     formData.append('productImage', productImage);
    //   }

    //   await axios.post(`${apiUrl}/api/products/create`, formData);
    //   fetchProducts();

    //   // Reset form fields
    //   setCategory('');
    //   setMrp('');
    //   setProductName('');
    //   setProductImage(null);
    //   setStatus('');
    // } catch (error) {
    //   console.error('Error saving product:', error.response?.data?.error || error.message);
    // }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/products/all`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error.response?.data?.error || error.message);
    }
  };

  const handleEdit = (productId) => {
    // Implement edit functionality
    console.log(`Edit product with ID: ${productId}`);
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`${apiUrl}/api/products/${productId}`);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error.response?.data?.error || error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 justify-center">
        {/* Category */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            id="category"
            name="category"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="milk">Milk</option>
            <option value="fruits">Fruits</option>
          </select>
        </div>

        {/* MRP */}
        <div>
          <label htmlFor="mrp" className="block text-sm font-medium text-gray-700">
            MRP
          </label>
          <input
            type="text"
            id="mrp"
            name="mrp"
            className="mt-1 p-2 border rounded-md w-full"
            value={mrp}
            onChange={(e) => setMrp(e.target.value)}
          />
        </div>

        {/* Product Name */}
        <div>
          <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            className="mt-1 p-2 border rounded-md w-full"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        {/* Product Image */}
        <div>
          <label htmlFor="productImage" className="block text-sm font-medium text-gray-700">
            Product Image
          </label>
          <input
            type="file"
            id="productImage"
            name="productImage"
            accept="image/*"
            className="mt-1 p-2 border rounded-md w-full"
            onChange={handleImageChange}
          />
        </div>

        {/* Status */}
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            id="status"
            name="status"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Select Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <button type="submit" className="bg-indigo-500 text-white p-2 rounded-md">
          Save Product
        </button>
      </form>

      {/* Display form data in ProductList */}
      {/* {formData && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-4">Form Data</h2>
          <pre className="whitespace-pre-wrap">{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )} */}

      {/* Conditionally render ProductList */}
      {products.length > 0 && <ProductList products={products} onEdit={handleEdit} onDelete={handleDelete} />}
    </div>
  );
};

export default Product;
