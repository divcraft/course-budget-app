import React from 'react';
import { Inner, Outer } from './LoadingIndicator.css'

const LoadingIndicator = () => {
   const inner = []
   for (let i = 0; i < 12; i++) {
      inner.push(<Inner key={i} />)
   }
   return (
      <Outer>
         {inner}
      </Outer>
   );
}

export default LoadingIndicator;