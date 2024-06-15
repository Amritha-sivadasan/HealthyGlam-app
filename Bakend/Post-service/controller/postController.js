  const Post= require('../model/postModel')

const addPost=async (req,res)=>{
    const {title,description,image}=req.body

    console.log("this is from post controller",req.body);
    try {
        const post=new Post({title,description,image})
        post.save()
         res.json('New evnt added')
 
    } catch (error) {
        console.log('error from add post',error.message);
    }
}

 const getPost=async(req,res)=>{
  try {
       const db= await Post.find({})
         res.status(200).json(db)

  } catch (error) {
    
  }
 }


module.exports={addPost,getPost}