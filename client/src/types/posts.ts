export interface Post {
  message: string;
};
type APIStatus = 'loading' | 'loaded' | 'failed' | 'initial';
export interface Posts {
  lastFetched: number;
  apiStatus: APIStatus;
  error: string;
  content: Post[];
};