/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-dropdown-select';
import { Wrapper, Title, SelectWrapper } from './Header.styles';
import { yearOptions } from './Header.options';

const Header = (props) => {
  const {
    title, year, handleChange,
  } = props;
  return (
    <Wrapper>
      <Title>{title}</Title>
      <SelectWrapper>

        {
          year && (
            <Select
              options={yearOptions}
              values={[yearOptions.find((option) => option.year === year)]}
              labelField="year"
              valueField="year"
              color="#0074D9"
              placeholder="Tahun"
              onChange={(value) => handleChange(value)}
            />
          )
        }
      </SelectWrapper>
    </Wrapper>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number,
  handleChange: PropTypes.func,
};


export default Header;
