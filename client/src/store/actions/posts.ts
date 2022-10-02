import * as api from '../../api';
import { Posts, Post } from '../../types/posts';

export const TOGGLE_FORM_MODAL = 'TOGGLE_FORM_MODAL';
export const REWRITE_POSTS = 'REWRITE_POSTS';
export const ADD_TO_POSTS = 'ADD_TO_POSTS';
export const REWRITE_A_POST = 'REWRITE_A_POST';
export const REMOVE_A_POST = 'REMOVE_A_POST';

const rewritePosts = (newPosts: Posts) => (dispatch: any) : Promise<void> => {
  dispatch({
    type: REWRITE_POSTS,
    payload: newPosts
  });
  return Promise.resolve();
};

const addToPosts = (newPost: Post) => (dispatch: any) : Promise<void> => {
  dispatch({
    type: ADD_TO_POSTS,
    payload: newPost
  });
  return Promise.resolve();
};

const rewriteAPost = (updatedPost: Post) => (dispatch: any) : Promise<void> => {
  dispatch({
    type: REWRITE_A_POST,
    payload: updatedPost
  });
  return Promise.resolve();
};

const removeAPost = (deletedPost: Post) => (dispatch: any) : Promise<void> => {
  dispatch({
    type: REMOVE_A_POST,
    payload: deletedPost
  });
  return Promise.resolve();
};

export const toggleFormModal = (onOrOff: boolean) => (dispatch: any) : Promise<void> => {
  dispatch({
    type: TOGGLE_FORM_MODAL,
    payload: onOrOff
  });
  return Promise.resolve();
};

export const fetchPosts = () => async (dispatch: any) => {
  try {
    dispatch(rewritePosts({ 
      lastFetched: Date.now(),
      apiStatus: 'loading',
      showModal: false,
      error: '',
      content: []
    }));
    const { status, data } = await api.fetchPosts();
    if (status === 200) {
      dispatch(rewritePosts({ 
        lastFetched: Date.now(),
        apiStatus: 'loaded',
        showModal: false,
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
      showModal: false,
      error: error,
      content: []
    }));
    console.log(error);
  }
};

export const createPost = (newPost: Post) => async (dispatch: any) => {
  try {
    const { status, data } = await api.createPost(newPost);
    if (status === 200) {
      dispatch(addToPosts(data));
    }
    else {
      throw `Server returned unexpected response structure. Status ${status}`;
    }
  } 
  catch (error) {
    console.log(error);
  }
};

export const updatePost = (id: string, updatedPost: Post) => async (dispatch: any) => {
  try {
    const { data } = await api.updatePost(id, updatedPost);
    dispatch(rewriteAPost(data));
  }
  catch (error) {
    console.log(error);
  }
};

export const deletePost = (deletedPost: Post) => async (dispatch: any) => {
  try {
    await api.deletePost(deletedPost);
    dispatch(removeAPost(deletedPost));
  }
  catch (error) {
    console.log(error);
  }
};

export const likePost = (likedPost: Post) => async (dispatch: any) => {
  try {
    const { data } = await api.likePost(likedPost);
    dispatch(rewriteAPost(data));
  }
  catch (error) {
    console.log(error);
  }
};