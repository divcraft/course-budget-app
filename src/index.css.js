import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
/* ${normalize} */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
}

body {
  background-color: ${({ theme }) => theme.colors.gray.light};
  font-family: 'Oxygen', sans-serif;
}
`