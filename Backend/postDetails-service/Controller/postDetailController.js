const PostDetails = require("../model/PostDetailsModel");


const getPost = async (req, res) => {
  console.log('this is the get post function ');
  try {
    const allPost=await PostDetails.find({})

    res.status(200).send(allPost);
  } catch (error) {
    console.log('error in post details function ',error);
  }
};

module.exports = getPost;
