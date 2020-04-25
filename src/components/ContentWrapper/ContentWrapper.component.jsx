import React from 'react';
import { Wrapper } from './ContentWrapper.styles'

const ContentWrapper = ({children}) => {
  return (
    <Wrapper>
      {
        children.map(childrenItem => (childrenItem))
      }
    </Wrapper>
  )
}

export default ContentWrapper;