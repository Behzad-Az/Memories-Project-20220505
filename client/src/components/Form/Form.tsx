import React, { FC, FormEventHandler, ReactEventHandler, useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Paper
} from '@material-ui/core';
// import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPost } from '../../store/actions/posts';
import { useAppDispatch } from '../../store/store';
import { Post } from '../../types/posts';

interface Props {};

type FormData = Post;

const Form: FC<Props> = () : JSX.Element => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [postData, setPostData] = useState<FormData>({
    creator: '',
    title: '',
    message: '',
    tags: [],
    selectedFile: 'some_file'
  });

  const handleSubmit = (event: React.SyntheticEvent) : void => {
    event.preventDefault();
    dispatch(createPost(postData));

  };

  const handleClear = () : void => {

  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
        <Typography variant='h6'>Creating a Memory</Typography>
        <TextField
          name='creator'
          variant='outlined'
          label='Creator'
          fullWidth
          value={postData.creator}
          onChange={e => setPostData({
            ...postData,
            creator: e.target.value
          })}
        />
        <TextField
          name='title'
          variant='outlined'
          label='Title'
          fullWidth
          value={postData.title}
          onChange={e => setPostData({
            ...postData,
            title: e.target.value
          })}
        />
        <TextField
          name='message'
          variant='outlined'
          label='Message'
          fullWidth
          value={postData.message}
          onChange={e => setPostData({
            ...postData,
            message: e.target.value
          })}
        />
        <TextField
          name='tags'
          variant='outlined'
          label='Tags'
          fullWidth
          value={postData.tags}
          onChange={e => setPostData({
            ...postData,
            tags: [ ...postData.tags, e.target.value ]
          })}
        />
        <div className={classes.fileInput}>
          {/* <FileBase
            type='file'
            multiple={false}
            onDone={(output: any) => setPostData({ ...postData, selectedFile: output.base64 })}
          /> */}
        </div>
        <Button 
          className={classes.buttonSubmit}
          variant='contained'
          color='primary'
          size='large'
          type='submit'
          fullWidth
        >
          Submit
        </Button>
        <Button 
          className={classes.buttonSubmit}
          variant='contained'
          color='secondary'
          size='small'
          onClick={handleClear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;