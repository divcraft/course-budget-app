import styled from 'styled-components'

export const FlexContainer = styled.div`
   display: flex;
   section {
      min-height: 200px;
      position: relative;
      
   }
   section:nth-child(1) {
      flex: 4;
   }
   section:nth-child(2) {
      flex: 8;
   }
`