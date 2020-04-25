/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ColorItem from '../ColorItem/ColorItem.components';
import Wrapper from './ColorGroup.styles';

const ColorGroup = ({ data, isMixSize = false }) => {
  const colorBoxSize = 130;

  return (
    <Wrapper isMixSize={isMixSize}>
      {
        data.map(
          (colorItem, index) => {
            const size = isMixSize ? colorBoxSize - (index * 10) : colorBoxSize;
            return <ColorItem key={index} {...colorItem} size={size} />;
          },
        )
      }
    </Wrapper>
  );
};

export default ColorGroup;
