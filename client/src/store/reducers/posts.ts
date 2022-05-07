// import { FETCH_ALL } from './'
import { FETCH_ALL } from '../actions/posts';

interface Post {
  message: string;
};
type APIStatus = 'loading' | 'loaded' | 'failed' | 'initial';
interface Posts {
  lastFetched: number;
  apiStatus: APIStatus;
  error: string;
  content: Post[];
};

type State = Posts;

const initialState: State = {
  lastFetched: Date.now(),
  apiStatus: 'initial',
  error: '',
  content: []
};

export default function reducer(prevState: State = initialState, action: { type: string; payload: any; }) : State {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case 'CREATE':
      return prevState;
    default:
      return prevState;
  };
};