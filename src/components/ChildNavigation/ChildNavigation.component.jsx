/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './ChildNavigation.styles';
import ChildNavigationItem from '../ChildNavigationItem/ChildNavigationItem.component';

const ChildNavigation = (props) => {
  const { childNav, scrollPosition } = props;

  return (
    <Wrapper>
      {
        childNav.map((child, index) => (
          <ChildNavigationItem
            key={index}
            name={child.name}
            items={child.items}
            scrollPosition={scrollPosition}
          />
        ))
      }
    </Wrapper>
  );
};

ChildNavigation.propTypes = {
  childNav: PropTypes.array.isRequired,
  scrollPosition: PropTypes.number.isRequired,
};

export default ChildNavigation;
