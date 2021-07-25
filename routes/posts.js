const express = require('express')
const Post = require('../models/Post')
const router = express.Router();


//GET BACK ALL THE POSTS
router.get('/',async (req,res)=>{
    try{
        const posts = await Post.find();
        res.json(posts)
    }catch(err){
        res.status(200).json({message:err})
    }
})

//SUBMITS A POSTS
router.post('/',async (req,res)=>{
    const post = new Post({
        title:req.body.title,
        desc:req.body.desc
    });
    const savedPost = await post.save()
        try{const savedPost = await post.save();
            res.json(savedPost);
        }
        catch(err){
            res.status(200).json({message:err})
        }
})

//SPECIFIC POST
router.get('/:postId',async (req,res)=>{
   try{
    const post = await Post.findById(req.params.postId);
    res.json(post);
   }
   catch(err){
    res.status(200).json({message:err})
   }
})

//DELETE A POST
router.delete('/:postId',async (req,res)=>{
   try{
    const removedPost = await Post.remove({_id:req.params.postId});
    res.json(removedPost);
   }
   catch(err){
    res.status(200).json({message:err})
   }
})

//Update A POST
router.patch('/:postId',async (req,res)=>{
    try{
     const updatedPost = await Post.updateOne({_id:req.params.postId},{$set:{title: req.body.title}});
     res.json(updatedPost);
    }
    catch(err){
     res.status(200).json({message:err})
    }
 })
module.exports = router