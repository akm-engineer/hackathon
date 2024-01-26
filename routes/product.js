import express from "express";
import { allProduct, createProduct, deleteProduct, searchProduct, updateProduct } from "../controllers/product.js";



const productRouter = express.Router();

productRouter.get("/all",allProduct)
productRouter.get("/:id",searchProduct)
productRouter.put("/:id",updateProduct)
productRouter.delete("/:id",deleteProduct)
productRouter.post("/create",createProduct)

export default productRouter;