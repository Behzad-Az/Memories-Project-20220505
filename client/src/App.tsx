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
import iran from './images/iran.png';
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

      <AppBar 
        className={classes.appBar} 
        position='static' 
        color='inherit'
      >
        <Typography 
          className={classes.heading} 
          variant='h3' 
          align='center'
          color='textPrimary'
        >
          Report an #Aghazadeh
        </Typography>
        <img className={classes.image} src={iran} alt='iran' height='60' />
      </AppBar>

      <Grow in>

        <Container>

          <Typography align='center' variant='subtitle1' style={{ color: 'white', marginBottom: 15 }}>
            Our mission is to expose those who have amassed personal wealth through rogue connections with corrupt Iranian officials at the expense of the Iranian public. Why should these people live freely and comfortably around the globe while the regime they helped enable imposes tyrany and economic hardship on its own people inside Iran.
          </Typography>

          <Typography align='center' variant='subtitle1' style={{ color: 'white' }}>
            We scrape Twitter and Instagram, and save reported #aghazades here forever and for everyone to see.
          </Typography>

          <Typography align='center' variant='subtitle1' style={{ color: 'white', marginBottom: 15 }}>
            If you know an #aghazade, please report them here.
          </Typography>

          <Typography align='center' variant='subtitle1' style={{ color: 'white', marginBottom: 15 }}>
            Is this legal? Well, is enabling a murderous regime legal?
          </Typography>

          {/* <Typography align='center' variant='subtitle1' style={{ color: 'white', marginBottom: 15 }}>
            Search functionality coming soon.
          </Typography> */}

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