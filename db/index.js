import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://ashishgk1999:DxItBtpEP3MByOVp@cluster0.avq85ej.mongodb.net/"
  )
  .then(() => console.log("DB is connected"))

  .catch((err) => console.log(err));
