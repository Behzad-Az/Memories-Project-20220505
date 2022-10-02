import mongoose from 'mongoose';
import AghazadehPost from '../models/aghazadehPost.js';

export const getPosts = async (req, res) => {
  try {
    const posts = await AghazadehPost.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  }
  catch (error) {
    res.status(404).json({ message: error });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new AghazadehPost(post);
  try {
    await newPost.save();
    res.status(200).json(newPost);
  }
  catch (error) {
    res.status(409).json({ message: error });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = { ...req.body, _id };

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

  const updatedPost = await AghazadehPost.findByIdAndUpdate(_id, post, { new: true });

  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
  await AghazadehPost.findByIdAndRemove(_id);
  res.json({ message: 'Post deleted successfully' });
};

export const incrementCrookCount = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
  const post = await AghazadehPost.findById(_id);
  const updatedPost = await AghazadehPost.findByIdAndUpdate(_id, { crookCount: post.crookCount + 1 }, { new: true });
  res.json(updatedPost);
};

export const incrementCleanCount = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
  const post = await AghazadehPost.findById(_id);
  const updatedPost = await AghazadehPost.findByIdAndUpdate(_id, { cleanCount: post.cleanCount + 1 }, { new: true });
  res.json(updatedPost);
};