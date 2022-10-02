import React, { FC } from 'react';
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

interface Props {};

const LeftSideBar: FC<Props> = () : JSX.Element => {

  const HASHTAG_SET_MARGIN_BTM = 40;

  const hashtags = [
    {
      color: 'green',
      text: 'MahsaAmini',
      marginBottom: 0
    },
    {
      color: 'white',
      text: 'PS752',
      marginBottom: 0
    },
    {
      color: 'Red',
      text: 'HadisNajafi',
      marginBottom: HASHTAG_SET_MARGIN_BTM
    },
    {
      color: 'green',
      text: 'Women',
      marginBottom: 0
    },
    {
      color: 'white',
      text: 'Life',
      marginBottom: 0
    },
    {
      color: 'red',
      text: 'Freedom',
      marginBottom: HASHTAG_SET_MARGIN_BTM
    }
  ]

  return (
    <Grid item xs={12} sm={12} md={2} lg={3} style={{ display: 'flex', justifyContent: 'center' }}>
      <Box 
        position={{ xs: 'relative', sm: 'relative', md: 'fixed' }}
        sx={{
          top: { xs: '45%' }
        }}
      >
        {
          hashtags.map((hashtag, index) => {
            return (
              <Typography align='center' variant='h6' style={{ marginBottom: hashtag.marginBottom, color: hashtag.color }}>
                #{ hashtag.text }
              </Typography>
            )
          })
        }
      </Box>
    </Grid>
  );
}

export default LeftSideBar;