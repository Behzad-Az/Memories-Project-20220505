import axios from 'axios';

import { Post } from '../types/posts';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost: Partial<Omit<Post, '_id'>>) => axios.post(url, newPost);

export const updatePost = (id: string, updatedPost: Post) => axios.patch(`${url}/${id}`, updatedPost);