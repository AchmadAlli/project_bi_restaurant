import React from 'react';
import { ColorBox, Wrapper } from './ColorItem.styles';

const ColorItem = ({name, code}) => {
  return (
    <Wrapper>
      <ColorBox code={ code } />
      <h4> { name } </h4>
      <h4> HEX { code } </h4>
    </Wrapper>
  )
}

export default ColorItem;