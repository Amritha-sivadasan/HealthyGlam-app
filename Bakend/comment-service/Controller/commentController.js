 const Comment= require('../model/commentModel')


 const SaveComment=async(req,res)=>{
    const {userId,postId,comment}=req.body
    try {
      const newComment=new Comment({userId,postId,comment})

        
    } catch (error) {
        console.log(error.message);
    }
 }