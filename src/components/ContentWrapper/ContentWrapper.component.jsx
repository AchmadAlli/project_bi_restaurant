/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './ContentWrapper.styles';

const ContentWrapper = ({ children }) => (
  <Wrapper>
    {
        children.map((childrenItem) => (childrenItem))
      }
  </Wrapper>
);

ContentWrapper.propTypes = {
  children: PropTypes.array.isRequired,
};

export default ContentWrapper;
