import { Dispatch } from 'redux';
import * as api from '../../api';

export const FETCH_ALL = 'FETCH_ALL';

export const getPosts = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } 
  catch (error: any) {
    console.log(error.message);
  }
};