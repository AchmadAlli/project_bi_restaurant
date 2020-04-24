import React from 'react';
import ColorItem from '../ColorItem/ColorItem.components';
import { Wrapper } from './ColorGroup.styles'

const ColorInformation = ({data}) => {
  
  return (
    <Wrapper>
      {
        data.map(
          (colorItem, index) => <ColorItem key={index} {...colorItem} />
        )
      }
    </Wrapper>
  )
}

export default ColorInformation;