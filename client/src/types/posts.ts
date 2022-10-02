export interface Post {
  _id: string | null;
  name: string;
  location: string;
  description: string;
  tags: string[];
  selectedFile: string;
  createdAt?: Date;
  crookCount?: number;
  cleanCount?: number;
};

type APIStatus = 'loading' | 'loaded' | 'failed' | 'initial';
export interface Posts {
  lastFetched: number;
  apiStatus: APIStatus;
  showModal: boolean;
  error: string;
  content: Post[];
};