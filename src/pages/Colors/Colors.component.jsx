import React from 'react';
import ColorGroup from '../../components/ColorGroup/ColorGroup.components';

const colorData = [
  {
    name: 'SkyBlue',
    code: '#00AEEF'
  },
  {
    name: 'Black',
    code: '#000000'
  },
  {
    name: 'Black',
    code: '#000000'
  },
  {
    name: 'Black',
    code: '#000000'
  },
  {
    name: 'Black',
    code: '#000000'
  },
  {
    name: 'Black',
    code: '#000000'
  },
  {
    name: 'White',
    code: '#FFFFFF'
  }
]

const Colors = () => {
  return (
    <div>
      <h1> Colors Page </h1>
      <ColorGroup data={colorData} isMixSize />
    </div>
  )
}

export default Colors;