import styled from 'styled-components';

export const List = styled.ul`
   border-bottom: solid 1px ${({ theme }) => theme.colors.gray.dark};
   padding: 5px 0;
`

export const ListItem = styled.ul`
   list-style: none;
`

export const InnerListItem = styled(ListItem)`
   display: flex;
   justify-content: space-between;
   span {
      width: 25%;
      text-align: right;
      &:first-child {
         text-align: left;
         min-width: 180px;
      }
   }
`