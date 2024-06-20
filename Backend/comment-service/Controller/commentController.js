 const Comment= require('../model/commentModel')
const {commentpublisher}=require('../util/commentPublisher')


 const SaveComment=async(req,res)=>{
   
    const {userId,postId,comment}=req.body
    try {
      const newComment=new Comment({userId,postId,comment})
       newComment.save()
       commentpublisher("COMMENT_CREATE",{postId,comment})
       res.status(200).json('success')
        
    } catch (error) {
        console.log('error from save cooment',error.message);
        res.status(500).json('server error')
    }
 }

 module.exports={SaveComment}