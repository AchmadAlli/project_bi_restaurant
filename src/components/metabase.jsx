/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import getIframe from '../lib/metabase';

export default function metabase(props) {
  return (
    <iframe
      src={getIframe(18)}
      frameBorder="0"
      width="100%"
      height={600}
      onLoad={() => props.handleLoading()}
    />
  );
}
