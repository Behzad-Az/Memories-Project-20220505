import { REWRITE_POSTS, ADD_TO_POSTS, REWRITE_A_POST, REMOVE_A_POST, TOGGLE_FORM_MODAL } from '../actions/posts';
import { Posts, Post } from '../../types/posts';

const initialState: Posts = {
  lastFetched: Date.now(),
  apiStatus: 'initial',
  showModal: false,
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
};

const deletePost = (prevState: Posts, deletedPost: Post) : Posts => {
  const newState = { ...prevState };
  newState.content = newState.content.filter(post => post._id !== deletedPost._id);
  return newState;
};

const toggleFormModal = (prevState: Posts, onOrOff: boolean) : Posts => {
  const newState = { ...prevState };
  newState.showModal = onOrOff;
  return newState;
};

export default function reducer(prevState: Posts = initialState, action: { type: string; payload: any; }) : Posts {
  switch (action.type) {
    case REWRITE_POSTS:
      return action.payload;
    case ADD_TO_POSTS:
      return addToPosts(prevState, action.payload);
    case REWRITE_A_POST:
      return updatePost(prevState, action.payload);
    case REMOVE_A_POST:
      return deletePost(prevState, action.payload);
    case TOGGLE_FORM_MODAL:
      return toggleFormModal(prevState, action.payload);
    default:
      return prevState;
  };
};