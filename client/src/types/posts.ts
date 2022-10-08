export interface Post {
  _id: string | null;
  authorName: string;
  authorEmail: string;
  subjectName: string;
  subjectLocation: string;
  description: string;
  tags: string[];
  selectedFile: string;
  createdAt?: Date;
  crookCount?: number;
  cleanCount?: number;
  authorIpAddress?: string;
};

type APIStatus = 'loading' | 'loaded' | 'failed' | 'initial';
export interface Posts {
  lastFetched: number;
  apiStatus: APIStatus;
  error: string;
  content: Post[];
};