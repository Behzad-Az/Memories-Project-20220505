import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import TermsPage from './pages/TermsPage/TermsPage';
import LegalFaqPage from './pages/LegalFaq.tsx/LegalFaqPage';
import PrivacyPage from './pages/PrivacyPage/PrivacyPage';

interface Props {};

const App: FC<Props> = () : JSX.Element => {

  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/legal-faq' component={LegalFaqPage} />
      <Route exact path='/terms' component={TermsPage} />
      <Route exact path='/privacy' component={PrivacyPage} />
      <Route path='*' component={HomePage} />
    </Switch>
  );
}

export default App;