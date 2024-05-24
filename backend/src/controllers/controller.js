const express = require("express")
const Product = require('../models/model.js')


const allProduct = async(req,res)=>{
    try{
        const alldata = await Product.find({})
        res.send(alldata)
    }catch (error) {
        res.send(error)

    }
}
const allProductById = async(req,res)=>{
    try{
        const { id }= req.params
        const alldatabyid = await Product.find({_id:id})
        res.send(alldatabyid)
    }catch (error) {
        res.send(error)

    }
}
const PatchProduct = async(req,res)=>{
    try{
        const { id }= req.params
        const Patch = await Product.findOneAndUpdate({_id:id},req.body)
        res.send(Patch)
    }catch (error) {
        res.send(error)

    }
}
const deleteProduct = async(req,res)=>{
    try{
        const { id }= req.params
        const deletebyid = await Product.findOneAndDelete({_id:id})
        res.send(deletebyid)
    }catch (error) {
        res.send(error)

    }
}

const PostProduct = async(req,res)=>{
    try{
        const obj = req.body
        const newProduct= new Product(obj)
        newProduct.save()
        res.status(200).send(newProduct)
    }catch (error) {
        res.send(error)

    }
}

module.exports={allProduct ,allProductById ,deleteProduct ,PatchProduct,PostProduct  }