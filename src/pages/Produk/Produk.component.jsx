/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from 'react';
import Header from '../../components/Header/Header.component';
import { Wrapper, SalesDetail, SalesWrapper } from './Produk.styles';
import Card from '../../components/Card/Card.component';

class Produk extends Component {
  constructor(props) {
    super(props);

    this.state = {
      year: 2016,
      month: 1,
    };
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
    const PRODUCT_TRANSACTION = 7;
    const ANNUAL_PRICE = 24;
    const MOST_ORDERED = 31;
    const MOST_UNORDERED = 5;
    const MONTHLY_REVENUE = 25;
    const AVG_PRODUCT_SALES = 29;


    return (
      <>
        <Header
          title="Halaman Produk"
          year={year}
          month={month}
          handleChange={this.handleSelect}
        />
        <Wrapper>
          <SalesWrapper>
            <Card size="full" questionId={PRODUCT_TRANSACTION} server="slave" />
          </SalesWrapper>
          <SalesDetail>
            <Card size="fullOnWrapper" questionId={ANNUAL_PRICE} parameter={this.getParams('year')} />
            <Card size="fullOnWrapper" questionId={MONTHLY_REVENUE} parameter={this.getParams('all')} />
            <Card size="fullOnWrapper" questionId={AVG_PRODUCT_SALES} parameter={this.getParams('all')} />
          </SalesDetail>
          <Card size="medium" questionId={MOST_ORDERED} />
          <Card size="medium" questionId={MOST_UNORDERED} server="slave" />
        </Wrapper>
      </>
    );
  }
}

export default Produk;
