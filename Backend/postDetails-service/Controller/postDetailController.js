const PostDetails = require("../model/PostDetailsModel");


const getPost = async (req, res) => {
  console.log('this is the get post function ');
  try {
    const allPost = await PostDetails.aggregate([
      {
        $lookup: {
          from: "commentdetails", 
          localField: "_id", 
          foreignField: "postId", 
          as: "Comments", 
        },
      },
    ]);

    res.status(200).send(allPost);
  } catch (error) {
    console.log('error in post details function ',error);
  }
};

module.exports = getPost;
