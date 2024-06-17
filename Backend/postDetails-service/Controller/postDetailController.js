const PostDetails = require("../model/PostDetailsModel");
const CommentDetails = require("../model/commetModel");

const getPost = async (req, res) => {
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

    res.status(200).json(allPost);
  } catch (error) {}
};

module.exports = getPost;
