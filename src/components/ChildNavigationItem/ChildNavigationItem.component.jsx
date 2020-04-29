/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Item, ChildName } from './ChildNavigationItem.styles';

const ChildNavigationItem = (props) => {
  const { name, items, scrollPosition } = props;

  return (
    <Wrapper>
      <ChildName>{name}</ChildName>
      {
        items.map((item, index) => (
          <Item
            key={index}
            id={`${name}_${index}`}
          >
            {item.name}
          </Item>
        ))
      }
    </Wrapper>
  );
};

ChildNavigationItem.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  scrollPosition: PropTypes.number.isRequired,
};

export default ChildNavigationItem;
