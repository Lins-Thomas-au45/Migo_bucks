const express = require("express");
const router = express.Router();
const User = require("../models/usersSchema");


router.post("/",async(req,res)=>{
    const {username,password} = req.body
    console.log(req.body);
    try {
        await User.create({
            username:username,
            password,
        })
        console.log("user created");
        res.status(200).json()
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})
//username and password is saved to database


router.put("/:id",async (req,res)=>{
    console.log(req.params.id);
    const {username,password} = req.body
    try {
        await User.findByIdAndUpdate({_id:req.params.id},{
            $set:{
                username,
                password,
            }
        }
        )
        res.status(200).json()
        console.log("updated");
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})
//updating username and password


router.get("/",async (req,res)=>{
    try {
        const user = await User.find()
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
// getting data from database

router.delete("/:id",async(req,res)=>{
    try{
    const user = await User.findByIdAndRemove(req.params.id);
    if(!user) throw Error("no userr found")
    res.status(200).json({success:true})
    }
    catch(error){
        res.status(500).json({message:error.message})    }
})
//deleting particular data by id



module.exports = router