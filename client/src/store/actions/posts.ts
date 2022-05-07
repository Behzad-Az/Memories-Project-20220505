import * as api from '../../api';
import { Posts } from '../../types/posts';

export const FETCH_ALL = 'FETCH_ALL';
export const REWRITE_POSTS = 'REWRITE_POSTS';

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