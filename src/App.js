import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useTranslation } from 'react-i18next';

import GlobalStyles from 'index.css';
import theme from 'utils/theme';
import routes from 'utils/routes';

import { Provider as StoreProvider } from 'react-redux';
import configureStore from 'store';
import { connect } from 'react-redux';
import { fetchBudget, fetchBudgetedCategories } from 'store/actions';

import { Navigation, Wrapper, LoadingIndicator, Button } from 'components'

function App({ budget, budgetCategories, fetchBudget, fetchBudgetedCategories }) {
  const { i18n } = useTranslation()
  useEffect(() => {
    fetchBudget(1)
    fetchBudgetedCategories(1)
  }, [fetchBudget, fetchBudgetedCategories])
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
            <div style={{ paddingTop: 20 }}>
              <p>{budget.id}</p>
              <p>{budget.name}</p>
              <p>{budget.totalAmount}</p>
              <ul>
                {budget.transactions && budget.transactions.map((transaction, index) => (
                  <li key={index}>
                    <p>{transaction.description}</p>
                    <p>{transaction.amount}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Route>
          <Route path='/budget'>
            Budget
            </Route>
        </Switch>
      </Wrapper>
    </>
  );
}

const ConnectedApp = connect(state => {
  console.log(state)
  const { budget, budgetCategories } = state.budget
  return {
    budget,
    budgetCategories
  }
}, {
  fetchBudget,
  fetchBudgetedCategories
})(App)

function RootApp() {
  const store = configureStore()
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Suspense fallback={<LoadingIndicator />}>
            <ConnectedApp />
          </Suspense>
        </Router>
      </ThemeProvider>
    </StoreProvider>
  )
}

export default RootApp;
