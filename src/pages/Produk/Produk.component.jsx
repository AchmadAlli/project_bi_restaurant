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
    };


    this.handleSelect = this.handleSelect.bind(this);
  }

  getParams(param) {
    const { year } = this.state;
    switch (param) {
      case 'year':
        return { year };
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
    const PRODUCT_TRANSACTION = 15;
    const ANNUAL_PRICE = 24;
    const MOST_ORDERED = 31;
    const MOST_UNORDERED = 32;
    const MONTHLY_REVENUE = 25;
    const AVG_PRODUCT_SALES = 29;
    const TOTAL_PRODUCT_SALES = 26;


    return (
      <>
        <Header
          title="Halaman Produk"
          year={year}
          handleChange={this.handleSelect}
        />
        <Wrapper>
          <SalesWrapper>
            <Card size="full" questionId={PRODUCT_TRANSACTION} height="870px" />
          </SalesWrapper>
          <SalesDetail>
            <Card size="fullOnWrapper" questionId={ANNUAL_PRICE} parameter={this.getParams('year')} />
            <Card size="fullOnWrapper" questionId={MONTHLY_REVENUE} parameter={this.getParams('all')} />
            <Card size="fullOnWrapper" questionId={TOTAL_PRODUCT_SALES} parameter={this.getParams('all')} />
            <Card size="fullOnWrapper" questionId={AVG_PRODUCT_SALES} parameter={this.getParams('all')} />
          </SalesDetail>
          <Card size="medium" questionId={MOST_ORDERED} />
          <Card size="medium" questionId={MOST_UNORDERED} />
        </Wrapper>
      </>
    );
  }
}

export default Produk;
