import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Wrapper } from 'components';

export const Container = styled.div`
height: 70px;
border-bottom: solid 1px ${({ theme }) => theme.colors.gray.dark};
`
export const NavWrapper = styled(Wrapper)`
display: flex;
justify-content: space-between;
`

export const List = styled.ul`
display: flex;
list-style: none;
`

export const Link = styled(NavLink)`
display: block;
color: black;
text-decoration: none;
padding: 0 15px;
text-align: center;
font-weight: 700;
line-height: 70px;
   &.active, &.active:hover {
      background-color: ${({ theme }) => theme.colors.gray.dark};
   }
   :hover {
      background-color: ${({ theme }) => theme.colors.gray.normal};
   }
`