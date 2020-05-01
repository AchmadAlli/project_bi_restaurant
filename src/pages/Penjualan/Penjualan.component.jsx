import React from 'react';
import Wrapper from './Penjualan.styles';
import Card from '../../components/Card/Card.component';
import PenjualanImg from '../../assets/img/Penjualan.png';

const Penjualan = () => (
  <Wrapper>
    <Card size="full">
      <p>halo</p>
      <img src={PenjualanImg} alt="test" />
    </Card>
    <Card size="full">
      <p>halo</p>
      <img src={PenjualanImg} alt="test" />
    </Card>
    <Card size="medium">
      <p>halo</p>
      <img src={PenjualanImg} alt="test" />
    </Card>
    <Card size="medium">
      <p>halo</p>
      <img src={PenjualanImg} alt="test" />
    </Card>
  </Wrapper>
);

export default Penjualan;
