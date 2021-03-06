import React, { FC } from 'react';

import Post from './Post/Post';
import useStyles from './styles';

interface Props {};

const Posts: FC<Props> = () : JSX.Element => {
  const classes = useStyles();
  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;