import React, { FC } from 'react';
import { 
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  Paper
} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
// import DeleteIcon from '@material-ui/icons/Delete';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Place, DeleteOutline, MoreHoriz } from '@material-ui/icons';
import moment from 'moment';

import { useAppDispatch, useAppSelector } from '../../../store/store';
import { deletePost, likePost } from '../../../store/actions/posts';
import { Post as PostType } from '../../../types/posts';

import useStyles from './styles';

interface Props {
  post: PostType;
  setCurrentId: React.Dispatch<React.SetStateAction<string | null>>;
};

const Post: FC<Props> = ({ post, setCurrentId }) : JSX.Element => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  return (
    <Card className={classes.card}>

      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.location}
      />
      
      <div className={classes.overlay}>
        <Typography variant='body2'>Reported {moment(post.createdAt).fromNow()}</Typography>
      </div>
      
      {/* <div className={classes.details}>
        <Typography variant='body2' color='textSecondary'>
          Reported { moment(post.createdAt).fromNow() }
        </Typography>
      </div> */}

      <Typography className={classes.name} variant='h4' gutterBottom>
        { post.name }
      </Typography>

      <Typography className={classes.location} variant='body1'>
        <Place fontSize='small' />from { post.location }
      </Typography>

      <CardContent>
        <Typography variant='body2' color='textSecondary' component={'p'}>
          { post.description }
        </Typography>
      </CardContent>

      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary'>
          {
            post.tags.map(tag => `#${tag.trim()} `)
          }
        </Typography>
      </div>
      
      <CardActions className={classes.cardActions}>

        <Button size='small' color='primary' onClick={() => dispatch(likePost(post))}>
          { post.crookCount }&nbsp;<ThumbDownAltIcon fontSize='small' />&nbsp;He/she is a crook.&nbsp;
        </Button>

        <Button size='small' color='primary' onClick={() => dispatch(likePost(post))}>
          { post.crookCount }&nbsp;<ThumbUpAltIcon fontSize='small' />&nbsp;He/she is clean.&nbsp;
        </Button>

      </CardActions>

    </Card>
  );
};

export default Post;