  const PostDetails=require('../model/PostDetailsModel')

const getPost=async(req,res)=>{
    try {
        const allPost= await PostDetails.find({})
         res.status(200).json(allPost)

    } catch (error) {
        
    }
}


module.exports =getPost