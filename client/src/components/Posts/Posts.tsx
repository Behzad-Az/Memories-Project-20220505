import React, { FC } from 'react';
import { Grid, CircularProgress, Box } from '@material-ui/core';

import { useAppSelector } from '../../store/store';
import Post from './Post/Post';
import useStyles from './styles';

interface Props {
  setCurrentId: React.Dispatch<React.SetStateAction<string | null>>
};

const Posts: FC<Props> = ({ setCurrentId }) : JSX.Element => {
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
            // sm={6}
          >
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))
      }
    </Grid>
  );
};

export default Posts;