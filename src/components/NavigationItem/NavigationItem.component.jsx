/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
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
  icon: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(NavigationItem);
