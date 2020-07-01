import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { oneOf } from 'prop-types';

import { InlineButton, RegularButton } from './Button.css'

const Button = ({ ...props }) => {
   const { children, variant, to } = props
   const Element = useMemo(() => {
      switch (variant) {
         case 'inline':
            return InlineButton
         case 'regular':
            return RegularButton
         default:
            return InlineButton
      }
   }, [variant])
   const content = useMemo(() => (
      <Element {...props}>
         {children}
      </Element>
   ), [props, children])
   return to ? <Link {...props}>{content}</Link> : <>{content}</>;
}

Button.propTypes = {
   variant: oneOf(['inline', 'regular'])
}

export default Button; 