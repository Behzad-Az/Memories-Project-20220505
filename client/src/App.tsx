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

import { useAppDispatch, useAppSelector } from './store/store';
import { fetchPosts, toggleFormModal } from './store/actions/posts';
import Posts from './components/Posts/Posts';
import LeftSideBar from './components/SideBanners/LeftSideBar';
import RightSideBar from './components/SideBanners/RightSideBar';
import Form from './components/Form/Form';
import memories from './images/memories.png';
import useStyles from './styles';

import logo from './logo.svg';
import './App.css';

function App() {
  const [currentId, setCurrentId] = useState<string | null>(null);
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const showModal = useAppSelector(state => state.posts.showModal);

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

            <RightSideBar />

            <Modal
              open={showModal}
              onClose={() => {
                dispatch(toggleFormModal(false));
              }}
              aria-labelledby='modal-modal-title'
              aria-describedby='modal-modal-description'
              style={{display:'flex', alignItems:'center', justifyContent:'center'}}
            >
              <Grid 
                item 
                xs={10} 
                sm={4}
              >
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Modal>


          </Grid>
 
          
        </Container>
      </Grow>


    </Container>
  );
}

export default App;