import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useTranslation } from 'react-i18next';

import GlobalStyles from 'index.css';
import theme from 'utils/theme';
import routes from 'utils/routes';

import { Navigation, Wrapper, LoadingIndicator, Button } from 'components'

function App() {
  const { i18n } = useTranslation()
  return (
    <>
      <GlobalStyles />
      <Router>
        <Navigation routes={routes} RightButtons={(
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button variant='regular' onClick={() => i18n.changeLanguage('pl')}>pl</Button>
            <Button variant='regular' onClick={() => i18n.changeLanguage('en')}>en</Button>
          </div>
        )} />
        <Wrapper>
          <Switch>
            <Route path='/' exact>
              Home
            </Route>
            <Route path='/budget'>
              Budget
            </Route>
          </Switch>
        </Wrapper>
      </Router>
    </>

  );
}

function RootApp() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<LoadingIndicator />}>
        <App />
      </Suspense>
    </ThemeProvider>
  )
}

export default RootApp;
