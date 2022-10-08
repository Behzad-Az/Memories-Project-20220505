import mongoose from 'mongoose';
import AghazadehPost from '../models/aghazadehPost.js';

export const getPosts = async (req, res) => {
  try {
    const posts = await AghazadehPost.find({}, { authorName: false, authorEmail: false, authorIpAddress: false }).sort({ createdAt: -1 });
    res.status(200).json(posts);
  }
  catch (error) {
    res.status(404).json({ message: error });
  }
};

export const createPost = async (req, res) => {
  try {
    const post = req.body;
    const validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!(
      post.authorName.length > 2 &&
      post.authorEmail.match(validRegex) &&
      post.subjectName.length > 3 &&
      post.subjectLocation.length > 3 &&
      post.description.length > 139 &&
      post.description.length < 501 &&
      post.tags.length > 0 &&
      post.selectedFile.length > 500
    )) throw 'invalid inputs';
    const newPost = new AghazadehPost(post);
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