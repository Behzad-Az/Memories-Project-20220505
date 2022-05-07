import { REWRITE_POSTS } from '../actions/posts';
import { Posts } from '../../types/posts';

const initialState: Posts = {
  lastFetched: Date.now(),
  apiStatus: 'initial',
  error: '',
  content: []
};

export default function reducer(prevState: Posts = initialState, action: { type: string; payload: any; }) : Posts {
  switch (action.type) {
    case REWRITE_POSTS:
      return action.payload;
    case 'CREATE':
      return prevState;
    default:
      return prevState;
  };
};