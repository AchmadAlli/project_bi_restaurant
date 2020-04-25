import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Wrapper from './NavigationItem.styles';

const NavigationItem = (props) => {
  const {
    name, link, icon, location,
  } = props;
  const path = location.pathname.split('/')[1];
  const isActive = path === link.split('/')[1];

  return (
    <Wrapper isActive={isActive}>
      <Link to={link}>
        {icon}
        {name}
      </Link>
    </Wrapper>
  );
};

NavigationItem.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  location: PropTypes.string.isRequired,
};

export default withRouter(NavigationItem);
