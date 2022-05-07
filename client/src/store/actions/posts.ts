import * as api from '../../api';
import { Posts, Post } from '../../types/posts';

export const REWRITE_POSTS = 'REWRITE_POSTS';
export const ADD_TO_POSTS = 'ADD_TO_POSTS';

const rewritePosts = (newPosts: Posts) => (dispatch: any) : Promise<void> => {
  dispatch({
    type: REWRITE_POSTS,
    payload: newPosts
  });
  return Promise.resolve();
};

export const fetchPosts = () => async (dispatch: any) => {
  try {
    dispatch(rewritePosts({ 
      lastFetched: Date.now(),
      apiStatus: 'loading',
      error: '',
      content: []
    }));
    const { status, data } = await api.fetchPosts();
    if (status === 200) {
      dispatch(rewritePosts({ 
        lastFetched: Date.now(),
        apiStatus: 'loaded',
        error: '',
        content: data
      }));
    }
    else {
      throw `Server returned unexpected response structure. Status ${status}`;
    }
  } 
  catch (error: any) {
    dispatch(rewritePosts({ 
      lastFetched: Date.now(),
      apiStatus: 'failed', 
      error: error.message,
      content: []
    }));
    console.log(error.message);
  }
};

const addToPosts = (newPost: Post) => (dispatch: any) : Promise<void> => {
  dispatch({
    type: ADD_TO_POSTS,
    payload: newPost
  });
  return Promise.resolve();
};

export const createPost = (newPost: Post) => async (dispatch: any) => {
  try {
    const { status, data } = await api.createPost(newPost);
    if (status === 200) {
      dispatch(addToPosts(newPost));
    }
    else {
      throw `Server returned unexpected response structure. Status ${status}`;
    }
  } 
  catch (error) {
    console.log(error);
  }
};