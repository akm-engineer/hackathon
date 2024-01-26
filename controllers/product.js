import Product from "../models/product.js";

// Get all products
export const allProduct= async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  
  // Get a specific product by ID
  export const searchProduct= async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  // Create a new product
  export const createProduct = async (req, res) => {
    try {
      const newProduct = new Product(req.body);
      
      // Validate the new product data
      const validationError = newProduct.validateSync();
      if (validationError) {
        return res.status(400).json({ error: validationError.errors });
      }
  
      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct);
    } catch (error) {
      res.status(400).json({ error: 'Bad Request' });
    }
  };
  
  // Update a product by ID
 export const updateProduct= async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(updatedProduct);
    } catch (error) {
      res.status(400).json({ error: 'Bad Request' });
    }
  };
  
  // Delete a product by ID
 export const deleteProduct= async (req, res) => {
    try {
      const deletedProduct = await Product.findByIdAndDelete(req.params.id);
      if (!deletedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(deletedProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };