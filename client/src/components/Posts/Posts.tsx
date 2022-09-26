import React, { FC } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';

import { useAppSelector } from '../../store/store';
import Post from './Post/Post';
import useStyles from './styles';

interface Props {};

const Posts: FC<Props> = () : JSX.Element => {
  const classes = useStyles();
  const posts = useAppSelector(state => state.posts);

  if (posts.apiStatus === 'loading') {
    return <CircularProgress />;
  }

  return (
    <Grid 
      className={classes.mainContainer}
      container
      style={{
        alignItems: 'stretch',
      }}
      spacing={3}
    >
      {
        posts.content.map(post => (
          <Grid
            key={post._id}
            item
            xs={12}
            sm={6}
          >
            {/* <p>{post._id}</p> */}
            <Post post={post} />
          </Grid>
        ))
      }
    </Grid>
  );
};

export default Posts;