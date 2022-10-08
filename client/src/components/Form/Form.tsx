import React, { FC, useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Typography,
  Paper,
  Checkbox,
  FormControlLabel,
  Grid,
  Divider
} from '@material-ui/core';
import { Link } from 'react-router-dom';
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
    selectedFile: ''
  });

  const [agreedToTerms, setAgreedToTerms] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (event: React.SyntheticEvent) : void => {
    event.preventDefault();
    if (!areInputsValid()) {
      setErrorMessage('Invalid inputs');
      setAgreedToTerms(false);
      return;
    }

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
      selectedFile: ''
    });
  };

  const handleTermsCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgreedToTerms(event.target.checked);
  };

  const areInputsValid = () : boolean | null => {
    const validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // const {
    //   authorName,
    //   authorEmail,
    //   subjectName,
    //   subjectLocation,
    //   description,
    //   tags,
    //   selectedFile
    // } = postData;
    // if (authorName.length > 2) setErrorMessage('Invalid author name');
    // if (postData.authorEmail.match(validRegex) ) setErrorMessage('Invalid author name');
    console.log("i'm here 3:",
      postData.authorName.length > 2,
      postData.authorEmail.match(validRegex),
      postData.subjectName.length > 3,
      postData.subjectLocation.length > 3,
      postData.description.length > 139,
      postData.description.length < 501,
      postData.tags.length > 0,
      postData.selectedFile.length > 500
    );

    return (
      postData.authorName.length > 2 &&
      postData.authorEmail.match(validRegex) &&
      postData.subjectName.length > 3 &&
      postData.subjectLocation.length > 3 &&
      postData.description.length > 139 &&
      postData.description.length < 501 &&
      postData.tags.length > 0 &&
      postData.selectedFile.length > 500
    );
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
        
        <Typography variant='h6' style={{ textAlign: 'center', width: '100%' }}>
          Report a Rogue Connection
        </Typography>
        
        <Typography variant='subtitle2' style={{ width: '100%' }}>
          About You:
        </Typography>
        <Typography variant='caption'>
          <Link to='/legal-faq'>Why do we need this?</Link>
        </Typography>
        <Divider style={{ width: '100%' }} />
        <Grid container spacing={2} className={classes.multiTextBoxPerLine}>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <TextField
              name='authorName'
              variant='outlined'
              label='Your name'
              fullWidth
              value={postData.authorName}
              onChange={e => setPostData({
                ...postData,
                authorName: e.target.value.trim()
              })}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <TextField
              name='authorEmail'
              variant='outlined'
              label='Your email'
              fullWidth
              value={postData.authorEmail}
              onChange={e => setPostData({
                ...postData,
                authorEmail: e.target.value.trim()
              })}
            />
          </Grid>
        </Grid>
        <Typography variant='caption'>
          * Email format must be correct like example@example.com
        </Typography>

        <Typography variant='subtitle2' style={{ paddingTop: 10 }}>About Your Subject</Typography>
        <Divider style={{ width: '100%' }} />
        <Grid container spacing={2} className={classes.multiTextBoxPerLine}>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <TextField
              name='subjectName'
              variant='outlined'
              label='Who is this about?'
              fullWidth
              value={postData.subjectName}
              onChange={e => setPostData({
                ...postData,
                subjectName: e.target.value.trim()
              })}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <TextField
              name='subjectLocation'
              variant='outlined'
              label='Where do they live?'
              fullWidth
              value={postData.subjectLocation}
              onChange={e => setPostData({
                ...postData,
                subjectLocation: e.target.value.trim()
              })}
            />
          </Grid>
        </Grid>
        
        <TextField
          name='description'
          variant='outlined'
          label='Description (min. 140, max. 500 characters)'
          multiline
          fullWidth
          value={postData.description}
          onChange={e => setPostData({
            ...postData,
            description: e.target.value.trim()
          })}
        />
        <TextField
          name='tags'
          variant='outlined'
          label='Tags (e.g. Thief, Corrupt)'
          fullWidth
          value={postData.tags}
          onChange={e => setPostData({
            ...postData,
            tags: e.target.value.split(',')
          })}
        />

        <Typography variant='body2' style={{ paddingTop: 10 }}>Select photo (.png, .jpg, .jpeg)</Typography>
        <div className={classes.fileInput}>
          <FileBase
            type='file'
            multiple={false}
            onDone={(output: any) => setPostData({ ...postData, selectedFile: output.base64 })}
          />
        </div>

        <Typography variant='caption' align='center' style={{ width: '100%', color: 'red' }}>
          { errorMessage }
        </Typography>
        
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
          style={{ width: '100%', justifyContent: 'center' }}
        />
        <Typography variant='caption' align='center' style={{ width: '100%', paddingBottom: 10 }}>
          <Link to='/terms'>Terms & Conditions</Link>
        </Typography>

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