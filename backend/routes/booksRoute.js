import express from "express"
import { Book } from "../models/bookModel.js";

const router = express.Router();

router.get('/',async (req,res)=>{
    try{
          const books = await Book.find({});
          return res.status(200).json({
            data:books
          }
          );  
    }
    catch(err){
        console.error(err)
        res.status(500).send({message:err.message})
    }
})

router.get('/:id',async (req,res)=>{
    try{
        const {id}=req.params;
          const book = await Book.findById(id);
          return res.status(200).json(book
          );  
    }
    catch(err){
        console.error(err)
        return res.status(500).send({message:err.message})
    }
})

router.post('/',async (req,res)=>{
    try{
        if(!req.body.title || !req.body.author || !req.body.publishYear){
            return res.status(400).send({
                message:"Fill all the fields"
            })
        }
        const newBook = {
            title: req.body.title,
            author:req.body.author ,
            publishYear:req.body.publishYear
        };
        const book = await Book.create(newBook)
        return res.status(201).send(book)
    }catch(err){
        console.error(err);
        res.status(500).send({message:err.message})
    }
})

router.put("/:id",async (req,res)=>{
    try{
        if (!req.body.title || !req.body.author || !req.body.publishYear){
            return res.status(400).send({
                message:"Fill all the fields"
            })
        }
        const {id}=req.params;
        const updatedData= await Book.findByIdAndUpdate(id,req.body);
        return res.status(200).json(updatedData)
    }catch(err){
        console.error(err);
        res.status(500).send({message:err.message})
    }
})

router.delete("/:id",async (req,res)=>{
    try{
        const {id}=req.params;
        const updatedData= await Book.findByIdAndDelete(id);
        return res.status(200).send({message:"Deleted Sucessfully"})
    }catch(err){
        console.error(err);
        res.status(500).send({message:err.message})
    }
})

export default router