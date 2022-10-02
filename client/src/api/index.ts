import axios from 'axios';

import { Post } from '../types/posts';

const url = 'https://memories-project-20220505.herokuapp.com/posts';
// const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost: Post) => axios.post(url, newPost);

export const updatePost = (id: string, updatedPost: Post) => axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (deletedPost: Post) => axios.delete(`${url}/${deletedPost._id}`);

export const likePost = (likedPost: Post) => axios.patch(`${url}/${likedPost._id}/likePost`);