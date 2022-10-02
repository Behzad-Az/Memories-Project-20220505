import React, { FC, useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Typography,
  Paper
} from '@material-ui/core';
import { InputOutlined } from '@material-ui/icons';
import FileBase from 'react-file-base64';

import { useAppDispatch, useAppSelector } from '../../store/store';
import useStyles from './styles';
import { createPost, toggleFormModal, updatePost } from '../../store/actions/posts';
import { Post } from '../../types/posts';

interface Props {
  currentId: string | null;
  setCurrentId: React.Dispatch<React.SetStateAction<string | null>>;
};

type FormData = Post;

const Form: FC<Props> = ({ currentId, setCurrentId }) : JSX.Element => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const post = useAppSelector(state => currentId ? state.posts.content.find(post => post._id === currentId) : null);

  const [postData, setPostData] = useState<FormData>({
    _id: null,
    creator: '',
    title: '',
    message: '',
    tags: [],
    selectedFile: 'some_file'
  });

  useEffect(() => {
    if (post) setPostData(post);
  }, [post])

  const handleSubmit = (event: React.SyntheticEvent) : void => {
    event.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    }
    else {
      dispatch(createPost(postData));
    }
    handleClear();
    dispatch(toggleFormModal(false));
  };

  const handleClear = () : void => {
    setCurrentId(null);
    setPostData({
      _id: null,
      creator: '',
      title: '',
      message: '',
      tags: [],
      selectedFile: 'some_file'
    });
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
        <Typography variant='h6'>{ currentId ? 'Editing' : 'Creating' } a Memory</Typography>
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
            tags: e.target.value.split(',')
          })}
        />
        <div className={classes.fileInput}>
          <FileBase
            type='file'
            multiple={false}
            onDone={(output: any) => setPostData({ ...postData, selectedFile: output.base64 })}
          />
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