import React from 'react';
import PropTypes from 'prop-types';
import { checkColorContrast, getRatio } from '../../lib/contrastChecker';
import {
  Color, Result, Wrapper,
} from './ContrastIdentifierResult.styles';

const ContrastIdentifierResult = ({ foreground, background, size }) => {
  const colorContrastResult = checkColorContrast(foreground, background)[size];

  return (
    <Wrapper>
      <Color
        foreground={foreground}
        colorCode={background}
        size={size}
      >
        <span> Aa </span>
      </Color>
      <Result>{`${getRatio(foreground, background)} : 1`}</Result>
      <Result status={colorContrastResult}>{colorContrastResult ? 'Pass' : 'Fail'}</Result>
    </Wrapper>
  );
};

ContrastIdentifierResult.propTypes = {
  background: PropTypes.string.isRequired,
  foreground: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default ContrastIdentifierResult;
