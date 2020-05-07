/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/prop-types */
import React from 'react';
import Spinner from 'react-spinkit';
import getIframe from '../../lib/metabase';
import { Wrapper, spinnerSyle } from './Card.styles';

const getHeight = (size) => {
  if (size === 'fullOnWrapper') { return 200; }

  return size === 'full' ? 600 : 300;
};

const Card = (props) => {
  const { size, questionId, parameter } = props;

  return (
    <Wrapper size={size}>
      <Spinner
        name="ball-grid-pulse"
        style={spinnerSyle}
      />
      <iframe
        src={getIframe(questionId, parameter)}
        frameBorder="0"
        width="100%"
        height={getHeight(size)}
      />
    </Wrapper>
  );
};

export default Card;
