import React, { Component } from 'react';
import Card from '../../components/Card/Card.component';
import Header from '../../components/Header/Header.component';
import { Wrapper, SalesDetail, SalesWrapper } from './Penjualan.styles';

const MONTHLY_REVENUE = 25;
const ANNUAL_PRICE = 24;
const ANNUAL_INCOME = 23;
// const MOST_ORDERED = 31;


class Penjualan extends Component {
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
    return (
      <>
        <Header
          title="Halaman Penjualan"
          year={year}
          month={month}
          handleChange={this.handleSelect}
        />
        <Wrapper>
          <SalesWrapper>
            <Card size="full" questionId={ANNUAL_INCOME} parameter={this.getParams('year')} />
          </SalesWrapper>
          <SalesDetail>
            <Card size="fullOnWrapper" questionId={ANNUAL_PRICE} parameter={this.getParams('year')} />
            <Card size="fullOnWrapper" questionId={MONTHLY_REVENUE} parameter={this.getParams('all')} />
          </SalesDetail>
        </Wrapper>
      </>
    );
  }
}

export default Penjualan;
