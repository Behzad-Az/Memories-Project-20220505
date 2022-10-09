import axios from 'axios';

import { Post } from '../types/posts';

const url = 'https://aghazadeh-production.herokuapp.com/posts';
// const url = 'http://localhost:5000/posts';

export const fetchPosts = (searchPhrase: string | null) => {
  const fullUrl = searchPhrase ? `${url}?searchPhrase=${searchPhrase}` : url;
  return axios.get(fullUrl)
};

export const createPost = (newPost: Post) => axios.post(url, newPost);

export const updatePost = (id: string, updatedPost: Post) => axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (deletedPost: Post) => axios.delete(`${url}/${deletedPost._id}`);

export const incrementCrookCount = (selectedPost: Post) => axios.patch(`${url}/${selectedPost._id}/crookCount`);

export const incrementCleanCount = (selectedPost: Post) => axios.patch(`${url}/${selectedPost._id}/cleanCount`);