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
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
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
        title={post.title}
      />
      
      <div className={classes.overlay}>
        <Typography variant='h6'>{post.title}</Typography>
        <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
      </div>

      <div className={classes.overlay2}>
        <Button 
          style={{color: 'white'}} size='small' 
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize='medium' />
        </Button>
      </div>

      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary'>
          {
            post.tags.map(tag => `#${tag.trim()} `)
          }
        </Typography>
      </div>

      <Typography className={classes.title} variant='h5' gutterBottom>
        { post.creator }
      </Typography>
      
      <CardContent>
        <Typography variant='body2' color='textSecondary' component={'p'}>
          { post.message }
        </Typography>
      </CardContent>
      
      <CardActions className={classes.cardActions}>

        <Button size='small' color='primary' onClick={() => dispatch(likePost(post))}>
          { post.likeCount }&nbsp;<ThumbDownAltIcon fontSize='small' />&nbsp;This person is a crook.&nbsp;
        </Button>

        <Button size='small' color='primary' onClick={() => dispatch(likePost(post))}>
          { post.likeCount }&nbsp;<ThumbUpAltIcon fontSize='small' />&nbsp;This person is clean.&nbsp;
        </Button>

        

        {/* <Button size='small' color='primary' onClick={() => dispatch(deletePost(post))}>
          <DeleteIcon fontSize='small' />
          Delete
        </Button> */}

      </CardActions>

    </Card>
  );
};

export default Post;