import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'index.css';
import theme from 'utils/theme';

import { Wrapper } from 'components'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Wrapper>
          BUDGET APP
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
