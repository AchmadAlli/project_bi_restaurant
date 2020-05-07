import React from 'react';
import Wrapper from './Pemasukan.styles';
import Card from '../../components/Card/Card.component';

const REVENUE_MONTHLY = 19;

const Pemasukan = () => (
  <Wrapper>
    <Card size="full" questionId={REVENUE_MONTHLY} />
  </Wrapper>
);

export default Pemasukan;
