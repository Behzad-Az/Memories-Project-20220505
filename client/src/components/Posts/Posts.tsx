import React, { FC } from 'react';
// import { useAppSee } from 'react-redux';
import { useAppSelector } from '../../store/store';

import Post from './Post/Post';
import useStyles from './styles';

interface Props {};

const Posts: FC<Props> = () : JSX.Element => {
  const classes = useStyles();
  const posts = useAppSelector(state => state.posts);

  console.log("i'm here: ", posts);

  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;