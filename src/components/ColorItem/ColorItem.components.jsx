import React from 'react';
import { ColorBox, Wrapper } from './ColorItem.styles';

const ColorItem = ({name, code, size}) => {
  return (
    <Wrapper>
      <ColorBox 
        code={ code } 
        size={size} 
      />
      <h4> { name } </h4>
      <h4> HEX { code } </h4>
    </Wrapper>
  )
}

export default ColorItem;