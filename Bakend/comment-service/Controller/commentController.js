 const Comment= require('../model/commentModel')


 const SaveComment=async(req,res)=>{
    const {userId,postId,comment}=req.body
    try {
      const newComment=new Comment({userId,postId,comment})
       newComment.save()
       res.status(200).json('success')
        
    } catch (error) {
        console.log('error from save cooment',error.message);
        res.status(500).json('server error')
    }
 }

 module.exports={SaveComment}