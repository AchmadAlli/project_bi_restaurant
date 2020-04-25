import React from 'react';
import PropTypes from 'prop-types';
import { ColorBox, Wrapper } from './ColorItem.styles';

const ColorItem = (props) => {
  const { name, code, size } = props;
  return (
    <Wrapper>
      <ColorBox
        code={code}
        size={size}
      />
      <h5>
        { name }
      </h5>
      <h5>
        { `HEX ${code}` }
      </h5>
    </Wrapper>
  );
};

ColorItem.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default ColorItem;
