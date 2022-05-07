export interface Post {
  creator: string;
  title: string;
  message: string;
  tags: string;
  selectedFile: string;
};

type APIStatus = 'loading' | 'loaded' | 'failed' | 'initial';
export interface Posts {
  lastFetched: number;
  apiStatus: APIStatus;
  error: string;
  content: Post[];
};