/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/prop-types */
import React from 'react';
import Spinner from 'react-spinkit';
import getIframe from '../../lib/metabase';
import { Wrapper, spinnerSyle } from './Card.styles';

const Card = (props) => {
  const { size, questionId } = props;

  return (
    <Wrapper size={size}>
      <Spinner
        name="ball-grid-pulse"
        style={spinnerSyle}
      />
      <iframe
        src={getIframe(questionId)}
        frameBorder="0"
        width="100%"
        height={600}
      />
    </Wrapper>
  );
};

export default Card;
