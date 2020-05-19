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
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  getParams(param) {
    const { year } = this.state;
    switch (param) {
      case 'year':
        return { year };
      case 'all':
      default:
        return { year };
    }
  }

  handleSelect(value) {
    const { year } = value[0];
    this.setState({ year });
  }

  render() {
    const { year } = this.state;
    return (
      <>
        <Header
          title="Halaman Penjualan"
          year={year}
          handleChange={this.handleSelect}
        />
        <Wrapper>
          <SalesWrapper>
            <Card size="full" questionId={ANNUAL_INCOME} parameter={this.getParams('year')} />
          </SalesWrapper>
          <SalesDetail>
            <Card size="fullOnWrapper" questionId={ANNUAL_PRICE} parameter={this.getParams('year')} />
            <Card size="fullOnWrapper" questionId={MONTHLY_REVENUE} parameter={this.getParams('year')} />
          </SalesDetail>
        </Wrapper>
      </>
    );
  }
}

export default Penjualan;
