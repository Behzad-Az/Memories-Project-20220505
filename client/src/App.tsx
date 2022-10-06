import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import TermsPage from './pages/TermsPage/TermsPage';

interface Props {};

const App: FC<Props> = () : JSX.Element => {

  return (
    <Switch>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route path='/terms'>
        <TermsPage />
      </Route>
      <Route path='*'>
        <HomePage />
      </Route>
    </Switch>
  );
}

export default App;