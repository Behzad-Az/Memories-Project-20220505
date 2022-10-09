import React, { useEffect, useState, FC } from 'react';
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  TextField,
  Button,
  Box
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../store/store';
import { fetchPosts } from '../../store/actions/posts';
import Posts from '../../components/Posts/Posts';
import LeftSideBar from '../../components/SideBanners/LeftSideBar';
import RightSideBar from '../../components/SideBanners/RightSideBar';
import iran from '../../images/iran.png';
import useStyles from '../../styles';

import './HomePage.css';

interface Props {};

const HomePage: FC<Props> = () : JSX.Element => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const [searchPhrase, setSearchPhrase] = useState<string>('');

  useEffect(() => {
    dispatch(fetchPosts(searchPhrase));
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

      <Typography align='center' variant='subtitle2' style={{ color: 'white', marginBottom: 15 }}>
        <Link to='/legal-faq' style={{ color: 'white' }}>Legal FAQ</Link> | <Link to='/terms' style={{ color: 'white' }}>Terms & Conditions</Link> | <Link to='/privacy' style={{ color: 'white' }}>Privacy Policy</Link>
      </Typography>

      <Grow in>

        <Container>

          <Typography align='center' variant='h5' style={{ color: 'white', marginBottom: 15 }}>
            The world should have no place for corrupt Iranian money!
          </Typography>

          <Typography align='center' variant='subtitle1' style={{ color: 'white', marginBottom: 15 }}>
            Our mission is to expose those who have profited from the rogue Iranian regime at the expense of the Iranian public. Why should the regime enablers live freely and comfortably around the globe while Iranians inside Iran suffer under a tyrannical and corrupt regime.
          </Typography>

          <Typography align='center' variant='subtitle1' style={{ color: 'white' }}>
            We scrape Twitter and Instagram, and save reported #aghazades here forever and for everyone to see.
          </Typography>

          <Typography align='center' variant='subtitle1' style={{ color: 'white', marginBottom: 15 }}>
            If you know an #aghazade, please report them here.
          </Typography>

          <Typography align='center' variant='subtitle1' style={{ color: 'white', marginBottom: 15 }}>
            Is this legal? Well, is enabling a murderous regime legal? Visit <Link to='/legal-faq' style={{ color: 'white' }}>Legal FAQ</Link> for more info. 
          </Typography>

          <Box textAlign='center' paddingBottom='20px'>
            <TextField
              id='outlined-search'
              label='Search' 
              type='search' 
              variant='outlined'
              style={{
                backgroundColor: 'white',
                borderRadius: 0,
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
                height: 50,
                width: '40%',
                minWidth: 200,
                // color: 'white'
              }}
              value={searchPhrase}
              onChange={e => setSearchPhrase(e.target.value.trim())}
            />
            <Button 
              variant='contained'
              color='primary'
              style={{
                borderRadius: 0,
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
                height: 50
              }}
              onClick={() => dispatch(fetchPosts(searchPhrase))}
            >
              Search
            </Button>
          </Box>

          <Grid container spacing={2} className={classes.mainContainer}>
            
            <LeftSideBar />
            
            <Grid item xs={12} sm={10} md={8} lg={6}>
              <Posts />
            </Grid>

            <RightSideBar />


          </Grid>
 
          
        </Container>
      </Grow>

      <Typography align='center' variant='subtitle2' style={{ color: 'white', paddingTop: 30, paddingBottom: 30 }}>
        <Link to='/legal-faq' style={{ color: 'white' }}>Legal FAQ</Link> | <Link to='/terms' style={{ color: 'white' }}>Terms & Conditions</Link> | <Link to='/privacy' style={{ color: 'white' }}>Privacy Policy</Link>
      </Typography>
      
    </Container>
  );
}

export default HomePage;