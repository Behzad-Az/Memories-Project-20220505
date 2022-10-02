import React, { useEffect, useState } from 'react';
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  Modal,
  Box,
  Hidden
} from '@material-ui/core';

import { useAppDispatch } from './store/store';
import { fetchPosts } from './store/actions/posts';
import Posts from './components/Posts/Posts';
import LeftSideBar from './components/SideBanners/LeftSideBar';
import Form from './components/Form/Form';
import memories from './images/memories.png';
import useStyles from './styles';

import logo from './logo.svg';
import './App.css';

function App() {
  const [currentId, setCurrentId] = useState<string | null>(null);
  const classes = useStyles();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Container maxWidth='lg'>

      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography 
          className={classes.heading} 
          variant='h2' 
          align='center'
          color='textPrimary'
        >
          Report an #Aghazadeh
        </Typography>
        {/* <img className={classes.image} src={memories} alt='memories' height='60' /> */}
      </AppBar>

      <Grow in>
        <Container>
          <Grid container spacing={2} className={classes.mainContainer}>
            
            <LeftSideBar />
            
            <Grid item xs={12} sm={10} md={8} lg={6}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>

            <Grid item xs={12} sm={1} md={2} lg={3}>
              <Box border={1}>xs=2</Box>
            </Grid>

          </Grid>
 
          
        </Container>
      </Grow>
    </Container>
  );
}

export default App;





{/* <Modal
  open={true}
  onClose={() => null}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  style={{
    justifyContent: 'center',
    alignContent: 'center',
    
  }}
>
  <Grid 
    item 
    xs={12} 
    sm={4}
  >
    <Form currentId={currentId} setCurrentId={setCurrentId} />
  </Grid>
</Modal> */}
