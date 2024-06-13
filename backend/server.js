import mongoose from "mongoose";
import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import {Book} from './models/bookModel.js'
import BookRouter from "./routes/booksRoute.js";

dotenv.config();

const app = express();
app.use(express.json());    

app.use(cors())

const { PORT, mongoDBURL } = process.env; 

app.get('/', (req, res) => {
    console.log(req);
    return res.status(200).send("Working");
});

app.use("/books",BookRouter);

mongoose.connect(mongoDBURL)
.then(()=>{console.log("Sucessfully connected to MongoDB")
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
})
.catch(err=>console.error(err))