import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import userRoute from '"./routes/user.route'

const app = express()
dotenv.config()

const port = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

//DBCODE
try {
    mongoose.connect(MONGO_URL)
    console.log("connected to MongoDB")
} catch (error) {
    console.log(error)
    
}


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
