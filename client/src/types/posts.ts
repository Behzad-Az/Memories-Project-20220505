export interface Post {
  _id: string | null;
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
  showModal: boolean;
  error: string;
  content: Post[];
};