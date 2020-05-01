/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import Wrapper from './Produk.styles';
import Card from '../../components/Card/Card.component';

const MOST_ORDERED = 17;

const Produk = () => (
  <Wrapper>
    <Card
      size="full"
      questionId={MOST_ORDERED}
    />
  </Wrapper>
);

export default Produk;
