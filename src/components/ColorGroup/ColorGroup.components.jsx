import React from 'react';
import ColorItem from '../ColorItem/ColorItem.components';
import { Wrapper } from './ColorGroup.styles'

const ColorGroup = ({data, isMixSize}) => {
  let colorBoxSize = 130;

  return (
    <Wrapper isMixSize>
      {
        data.map(
          (colorItem, index) => { 
            let size = isMixSize ? colorBoxSize - (index * 10) : colorBoxSize;
            return <ColorItem key={index} {...colorItem} size={size} />
          } 
        )
      }
    </Wrapper>
  )
}

export default ColorGroup;