const Post = require("../model/postModel");

const { publisher } = require("../util/postPublisher");

const addPost = async (req, res) => {
  const { title, description, image } = req.body;

  console.log("this is from post controller", req.body);
  try {
    const post = new Post({ title, description, image });
    post.save();
    publisher({ type:"POST_CREATED", data: post });

    res.status(201).json({ message: "New event added", post });
  } catch (error) {
    console.log("error from add post", error.message);
  }
};

const getPost = async (req, res) => {
  try {
    const db = await Post.find({});
    res.status(200).json(db);
  } catch (error) {}
};

module.exports = { addPost, getPost };
