import React, { FC, useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Typography,
  Paper,
  Checkbox,
  FormControlLabel
} from '@material-ui/core';
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
    authorName: '',
    authorEmail: '',
    subjectName: '',
    subjectLocation: '',
    description: '',
    tags: [],
    selectedFile: 'some_file'
  });

  const [agreedToTerms, setAgreedToTerms] = useState<boolean>(false);

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

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
    setAgreedToTerms(false);
    setPostData({
      _id: null,
      authorName: '',
      authorEmail: '',
      subjectName: '',
      subjectLocation: '',
      description: '',
      tags: [],
      selectedFile: 'some_file'
    });
  };

  const handleTermsCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgreedToTerms(event.target.checked);
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
        <Typography variant='h6'>{ currentId ? 'Editing' : 'Reporting' } an #Aghazadeh</Typography>
        
        <TextField
          name='authorName'
          variant='outlined'
          label='Your name'
          fullWidth
          value={postData.authorName}
          onChange={e => setPostData({
            ...postData,
            authorName: e.target.value
          })}
        />

        <TextField
          name='authorEmail'
          variant='outlined'
          label='Your email'
          fullWidth
          value={postData.authorEmail}
          onChange={e => setPostData({
            ...postData,
            authorEmail: e.target.value
          })}
        />
        
        <TextField
          name='subjectName'
          variant='outlined'
          label='Who is this about?'
          fullWidth
          value={postData.subjectName}
          onChange={e => setPostData({
            ...postData,
            subjectName: e.target.value
          })}
        />
        <TextField
          name='subjectLocation'
          variant='outlined'
          label='Where do they live?'
          fullWidth
          value={postData.subjectLocation}
          onChange={e => setPostData({
            ...postData,
            subjectLocation: e.target.value
          })}
        />
        <TextField
          name='description'
          variant='outlined'
          label='Description'
          multiline
          fullWidth
          value={postData.description}
          onChange={e => setPostData({
            ...postData,
            description: e.target.value
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

        <FormControlLabel
          control={
            <Checkbox
              name='SomeName'
              checked={agreedToTerms}
              onChange={handleTermsCheckBoxChange}
              color='primary'
            />
          }
          label='I agree to the terms and conditions.'
        />

        <Button 
          className={classes.buttonSubmit}
          variant='contained'
          color='primary'
          size='large'
          type='submit'
          fullWidth
          disabled={!agreedToTerms}
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