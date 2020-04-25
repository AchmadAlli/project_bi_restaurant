import React from 'react';
import { ColorBox, Wrapper } from './ColorItem.styles';

const ColorItem = ({name, code, size}) => {
  return (
    <Wrapper>
      <ColorBox 
        code={ code } 
        size={size} 
      />
      <h5> { name } </h5>
      <h5> HEX { code } </h5>
    </Wrapper>
  )
}

export default ColorItem;