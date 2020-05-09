/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import Wrapper from './Home.styles';
import Card from '../../components/Card/Card.component';

const REVENUE_ANNUAL = 18;
const REVENUE_MONTHLY = 19;
const TOTAL_DISH = 30;
const AVG_ORDERED_MONTHLY = 33;

const Home = () => (
  <Wrapper>
    <Card size="full" questionId={REVENUE_ANNUAL} server="master" />
    <Card size="full" questionId={REVENUE_MONTHLY} server="master" />
    <Card size="medium" questionId={TOTAL_DISH} server="master" />
    <Card size="medium" questionId={AVG_ORDERED_MONTHLY} server="master" />
  </Wrapper>
);

export default Home;
