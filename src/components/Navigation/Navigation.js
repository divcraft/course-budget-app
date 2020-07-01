import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

// import { Button } from "components";
import { Container, List, Link, NavWrapper } from './Navigation.css';

const Navigation = ({ routes, RightButtons }) => {
   const { t } = useTranslation()
   const listItems = routes.map(route => (
      <li key={route.id}>
         <Link to={route.path} exact={route.exact ? route.exact : false}>{t(route.pathName)}</Link>
         {/* {/* <Button to={route.path} exact={route.exact ? route.exact : false}>{t(route.pathName)}</Button> */}
      </li>
   ))
   return (
      <Container>
         <NavWrapper>
            <List>
               {listItems}
            </List>
            {RightButtons}
         </NavWrapper>
      </Container>
   );
}

Navigation.propTypes = {
   routes: PropTypes.array.isRequired
}

export default Navigation;