import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useTranslation } from 'react-i18next';

import GlobalStyles from 'index.css';
import theme from 'utils/theme';
import routes from 'utils/routes';

import { Provider as StoreProvider } from 'react-redux';
import configureStore from 'store';

import { Navigation, Wrapper, LoadingIndicator, Button } from 'components'
import BudgetPage from 'pages/Budget'

function App() {
  const { i18n } = useTranslation()
  return (
    <>
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
            <BudgetPage />
          </Route>
        </Switch>
      </Wrapper>
    </>
  );
}

function RootApp() {
  const store = configureStore()
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Suspense fallback={<LoadingIndicator />}>
            <App />
          </Suspense>
        </Router>
      </ThemeProvider>
    </StoreProvider>
  )
}

export default RootApp;
