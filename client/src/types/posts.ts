export interface Post {
  _id?: string;
  creator: string;
  title: string;
  message: string;
  tags: string[];
  selectedFile: string;
  createdAt?: Date;
  likeCount?: number;
};

type APIStatus = 'loading' | 'loaded' | 'failed' | 'initial';
export interface Posts {
  lastFetched: number;
  apiStatus: APIStatus;
  error: string;
  content: Post[];
};