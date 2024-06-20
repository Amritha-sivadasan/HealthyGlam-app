const Post = require("../model/postModel");

const { publisher } = require("../util/postPublisher");

const addPost = async (req, res) => {
  const { title, description, image } = req.body;

  console.log("this is from post controller", req.body);
  try {
    const post = new Post({ title, description, image });
    post.save();
    publisher("POST_CREATED", {postId:post._id,title,description,image} );

    res.status(201).json({ message: "New event added", post });
  } catch (error) {
    console.log("error from add post", error.message);
  }
};

module.exports = { addPost, };
