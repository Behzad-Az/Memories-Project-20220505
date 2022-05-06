import React, { FC } from 'react';

import useStyles from './styles';

interface Props {};

const Post: FC<Props> = () : JSX.Element => {
  const classes = useStyles();
  return (
    <h1>Post</h1>
  );
};

export default Post;