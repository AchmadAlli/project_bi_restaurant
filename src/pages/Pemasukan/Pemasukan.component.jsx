import React, { Component } from 'react';
import Header from '../../components/Header/Header.component';
import { Wrapper } from './Pemasukan.styles';
import Card from '../../components/Card/Card.component';

class Pemasukan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      year: 2016,
      month: 1,
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  getParams(param) {
    const { year, month } = this.state;
    switch (param) {
      case 'year':
        return { year };
      case 'month':
        return { month };
      case 'all':
      default:
        return { year, month };
    }
  }

  handleSelect(value) {
    const { year, month } = value[0];
    const newState = year ? { year } : { month };
    this.setState(newState);
  }

  render() {
    const { year, month } = this.state;
    const ANNUAL_INCOME = 23;
    const TOTAL_INCOME = 25;
    const TOTAL_PRODUCT_SALES = 26;
    const AVG_PRODUCT_SALES = 29;
    const AVG_TOTAL_PRODUCT = 33;

    return (
      <>
        <Header
          title="Halaman Produk"
          year={year}
          month={month}
          handleChange={this.handleSelect}
        />
        <Wrapper>
          <Card size="full" questionId={ANNUAL_INCOME} parameter={this.getParams('year')} />

          <Card size="small" questionId={TOTAL_PRODUCT_SALES} parameter={this.getParams('all')} />
          <Card size="small" questionId={TOTAL_INCOME} parameter={this.getParams('all')} />
          <Card size="small" questionId={AVG_TOTAL_PRODUCT} parameter={this.getParams('year')} />
          <Card size="small" questionId={AVG_PRODUCT_SALES} parameter={this.getParams('all')} />

        </Wrapper>
      </>
    );
  }
}


export default Pemasukan;
