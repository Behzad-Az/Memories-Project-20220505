import { REWRITE_POSTS, ADD_TO_POSTS, UPDATE_A_POST } from '../actions/posts';
import { Posts, Post } from '../../types/posts';

const initialState: Posts = {
  lastFetched: Date.now(),
  apiStatus: 'initial',
  error: '',
  content: []
};

const addToPosts = (prevState: Posts, newPost: Post) : Posts => {
  const newState = { ...prevState };
  newState.content = [ ...newState.content, newPost ];
  return newState;
};

const updatePost = (prevState: Posts, updatedPost: Post) : Posts => {
  const newState = { ...prevState };
  newState.content = newState.content.map(post => post._id === updatedPost._id ? updatedPost : post);
  return newState;
}

export default function reducer(prevState: Posts = initialState, action: { type: string; payload: any; }) : Posts {
  switch (action.type) {
    case REWRITE_POSTS:
      return action.payload;
    case ADD_TO_POSTS:
      return addToPosts(prevState, action.payload);
    case UPDATE_A_POST:
      return updatePost(prevState, action.payload);
    default:
      return prevState;
  };
};