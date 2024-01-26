import express from "express";

import dotenv from "dotenv";
import userRouter from "./routes/user.js";
import cors from "cors";

dotenv.config();
import "./db/index.js";
import productRouter from "./routes/product.js";
import categoryRouter from "./routes/cateory.js";

const app = express();



app.use(cors());
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/products",productRouter)
app.use('/api/category', categoryRouter)

app.listen(8000, () => {
  console.log(`The port is running on 8000`);
});
