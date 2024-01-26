// routes/categoryRoutes.js
import express from 'express';
import { createCategory, getAllCategories } from '../controllers/categories.js';


const categoryRouter = express.Router();

// Get all categories
categoryRouter.get('/all', getAllCategories);

// Create a new category
categoryRouter.post('/create', createCategory);

export default categoryRouter;
