import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
${normalize}

body {
  background-color: ${({ theme }) => theme.colors.gray.light};
  font-family: Arial;
}
`