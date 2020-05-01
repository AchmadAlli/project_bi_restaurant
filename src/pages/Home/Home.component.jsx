/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import Wrapper from './Home.styles';
import Card from '../../components/Card/Card.component';

const REVENUE_ANNUAL = 18;
const REVENUE_MONTHLY = 19;

const Home = () => (
  <Wrapper>
    <Card size="full" questionId={REVENUE_ANNUAL} />
    <Card size="full" questionId={REVENUE_MONTHLY} />
  </Wrapper>
);

export default Home;
