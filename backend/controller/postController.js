import postModel from "../models/postModel.js";
import userModel from "../models/userModel.js";

// Get all posts
export const getPost = async (req, res) => {
  const posts = await postModel.find();
  res.status(200).json(posts);
};

// Get a single post
export const getSinglePost = async (req, res) => {
  const post = await postModel.findOne({ slug: req.params.slug });
  res.status(200).json(post);
};

// Create a new post
export const createPost = async (req, res) => {
  const clerkUserId = req.auth.userId;
  if (!clerkUserId) {
    return res.status(401).json({ message: "Not authorized" });
  }
  const user = await userModel.findOne({ clerkUserId });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const newPost = postModel({ user: user._id, ...req.body });
  newPost.save();
  res.status(201).json(newPost);
};

// Delete a post
export const deletePost = async (req, res) => {
  const clerkUserId = req.auth.userId;
  if (!clerkUserId) {
    return res.status(401).json({ message: "Not authorized" });
  }
  const user = await userModel.findOne({ clerkUserId });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const deletedPost = await postModel.findByIdAndDelete({
    _id: req.params.id,
    user: user._id,
  });
  if(!deletedPost){
    return res.status(404).json({ message: "Post not found" });
  }
  res.status(200).json({ message: "post deleted successfully" });
};
