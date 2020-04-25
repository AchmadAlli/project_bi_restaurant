import React from 'react';
import PropTypes from 'prop-types';
import ContrastIdentifierResult from '../ContrastIdentifierResult/ContrastIdentifierResult.component';
import {
  Color, ColorInformation, Wrapper, ResultWrapper,
} from './ContrastIdentifier.styles';

const ContrastIdentifier = ({ name, colorCode, selectedColor }) => (
  <Wrapper>
    <ColorInformation>
      <Color colorCode={colorCode} />
      <div>
        <h4>{name}</h4>
        <h4>{colorCode}</h4>
      </div>
    </ColorInformation>
    <ResultWrapper>
      <ContrastIdentifierResult
        background={selectedColor}
        foreground={colorCode}
        size="large"
      />
      <ContrastIdentifierResult
        background={selectedColor}
        foreground={colorCode}
        size="small"
      />
    </ResultWrapper>
  </Wrapper>
);

ContrastIdentifier.propTypes = {
  name: PropTypes.string.isRequired,
  colorCode: PropTypes.string.isRequired,
  selectedColor: PropTypes.string.isRequired,
};

export default ContrastIdentifier;
