import React from 'react';
import Wrapper from './Pemasukan.styles';
import Card from '../../components/Card/Card.component';
import Penjualan from '../../assets/img/Penjualan.png';

const Pemasukan = () => (
  <Wrapper>
    <Card size="full">
      <p>halo</p>
      <img src={Penjualan} alt="test" />
    </Card>
    <Card size="full">
      <p>halo</p>
      <img src={Penjualan} alt="test" />
    </Card>
    <Card size="medium">
      <p>halo</p>
      <img src={Penjualan} alt="test" />
    </Card>
    <Card size="medium">
      <p>halo</p>
      <img src={Penjualan} alt="test" />
    </Card>
  </Wrapper>
);

export default Pemasukan;
