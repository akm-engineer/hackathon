// controllers/categoryController.js

import Category from "../models/category.js";


// Get all categories
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create a new category
export const createCategory = async (req, res) => {
  const { categoryName, description, status } = req.body;

  try {
    const newCategory = new Category({ categoryName, description, status });
    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory);
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' });
  }
};
