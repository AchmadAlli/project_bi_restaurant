import React, { Component } from 'react';
import Header from '../../components/Header/Header.component';
import { Wrapper } from './Pemasukan.styles';
import Card from '../../components/Card/Card.component';

class Pemasukan extends Component {
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
    const ANNUAL_INCOME = 23;
    const TOTAL_INCOME = 25;
    const TOTAL_PRODUCT_SALES = 26;
    const AVG_PRODUCT_SALES = 29;
    const AVG_TOTAL_PRODUCT = 33;
    return (
      <>
        <Header
          title="Halaman Pemasukan"
          year={year}
          handleChange={this.handleSelect}
        />
        <Wrapper>
          <Card size="full" questionId={ANNUAL_INCOME} parameter={this.getParams('year')} />
          <Card size="small" questionId={TOTAL_PRODUCT_SALES} parameter={this.getParams('year')} />
          <Card size="small" questionId={TOTAL_INCOME} parameter={this.getParams('year')} />
          <Card size="small" questionId={AVG_TOTAL_PRODUCT} parameter={this.getParams('year')} />
          <Card size="small" questionId={AVG_PRODUCT_SALES} parameter={this.getParams('year')} />
        </Wrapper>
      </>
    );
  }
}


export default Pemasukan;
