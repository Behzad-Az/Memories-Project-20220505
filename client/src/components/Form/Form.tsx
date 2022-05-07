import React, { FC, useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Paper
} from '@material-ui/core';
import FileBase from 'react-file-base64';

import useStyles from './styles';

interface Props {};

interface FormData {
  creator: string;
  title: string;
  message: string;
  tags: string;
  selectedFile: string;
};

const Form: FC<Props> = () : JSX.Element => {
  const classes = useStyles();
  const [postData, setPostData] = useState<FormData>({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
  });

  const handleSubmit = () : void => {

  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
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
            tags: e.target.value
          })}
        />
        <div className={classes.fileInput}>
          {/* <FileBase64
            type='file'
            multiple={false}
            // onDone={(output: any) => setPostData({ ...postData, selectedFile: output.base64 })}
          /> */}
        </div>
      </form>
    </Paper>
  );
};

export default Form;