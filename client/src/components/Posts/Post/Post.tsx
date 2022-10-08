import React, { FC } from 'react';
import { 
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import { Place } from '@material-ui/icons';
import moment from 'moment';

import { useAppDispatch } from '../../../store/store';
import { incrementCrookCount, incrementCleanCount } from '../../../store/actions/posts';
import { Post as PostType } from '../../../types/posts';

import useStyles from './styles';

interface Props {
  post: PostType;
};

const Post: FC<Props> = ({ post }) : JSX.Element => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  return (
    <Card className={classes.card}>

      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.subjectLocation}
      />

      <Typography className={classes.name} variant='h4' gutterBottom>
        { post.authorEmail }
      </Typography>

      <Typography className={classes.name} variant='h4' gutterBottom>
        { post.subjectName }
      </Typography>

      <Typography className={classes.location} variant='body1'>
        <Place fontSize='small' />from { post.subjectLocation }
      </Typography>
      <Typography variant='caption' color='textSecondary' className={classes.location}>
        Reported {moment(post.createdAt).fromNow()}
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

        <Button size='small' color='primary' onClick={() => dispatch(incrementCrookCount(post))}>
          { post.crookCount }&nbsp;<ThumbDownAltIcon fontSize='small' />&nbsp;He/she is a crook.&nbsp;
        </Button>

        <Button size='small' color='primary' onClick={() => dispatch(incrementCleanCount(post))}>
          { post.cleanCount }&nbsp;<ThumbUpAltIcon fontSize='small' />&nbsp;He/she is clean.&nbsp;
        </Button>

      </CardActions>

    </Card>
  );
};

export default Post;