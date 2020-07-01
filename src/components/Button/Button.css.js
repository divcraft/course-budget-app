import styled from 'styled-components';

const RootButton = styled.button`
   color: ${({ theme: { colors }, primary }) => primary ? colors.gray.dark : colors.pink.normal};
   display: inline-block;
   border: none;
   padding: ${({ theme: { spacing } }) => `${spacing.xs / 2}px ${spacing.xs}px`};
   background-color: transparent;
   cursor: ${props => props.to || props.onClick || props.type === 'submit' ? 'pointer' : 'default'};
   &:hover {
      opacity: .8;
   }
`

export const InlineButton = styled(RootButton)`
   &:hover {
      text-decoration: underline;
   }
`

export const RegularButton = styled(RootButton)`
   background-color: ${({ theme, primary }) => primary && theme.colors.pink.normal};
   margin: ${({ theme: { spacing } }) => `${spacing.xs / 2}px`};
   border: ${({ theme }) => `2px solid ${theme.colors.pink.normal}`};
   border-radius: 3px;
`