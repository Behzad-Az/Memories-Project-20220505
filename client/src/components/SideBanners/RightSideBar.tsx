import React, { FC } from 'react';
import {
  Grid,
  Box,
  Button
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { useAppDispatch } from '../../store/store';

interface Props {};

const RightSideBar: FC<Props> = () : JSX.Element => {
  const navigate = useHistory();

  return (
    <Grid item xs={12} sm={12} md={2} lg={3} style={{ display: 'flex', justifyContent: 'center' }}>
      <Box 
        overflow='hidden'
        sx={{
          position: {
            xs: 'relative', 
            sm: 'relative', 
            md: 'fixed'
          },
          top: { 
            xs: '45%' 
          },
          width: { 
            xs: '100%',
            sm: '100%',
            md: 'calc(16.65% - 20px)'
          }
        }}
      >
        <Button 
          // className={classes.buttonSubmit}
          variant='contained'
          color='primary'
          size='large'
          type='submit'
          fullWidth
          onClick={() => navigate.push('/report')}
        >
          + Report #Aghazadehs Here
        </Button>
      </Box>
    </Grid>
  );
}

export default RightSideBar;