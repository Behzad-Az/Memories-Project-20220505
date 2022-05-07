import axios from 'axios';

import { Post } from '../types/posts';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost: Post) => axios.post(url, newPost);