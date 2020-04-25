/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContrastIdentifier from '../ContrastIdentifier/ContrastIdentifier.component';
import {
  ColorList, ColorItem, ContrastCheckerWrapper, Wrapper, ContrastIdentifierWrapper,
} from './ColorContrast.styles';

class ColorContrast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedColor: '',
    };
  }

  selectColor(color) {
    this.setState({ selectedColor: color });
  }

  render() {
    const { shadesColor, foregroundColor } = this.props;
    const { selectedColor } = this.state;
    return (
      <Wrapper>
        <ColorList>
          <h3> Background Color </h3>
          {
            shadesColor.map((colorGroup) => colorGroup.map((color, index) => (
              <ColorItem
                  // eslint-disable-next-line react/no-array-index-key
                key={index}
                isSelected={selectedColor === color.code}
                code={color.code}
                onClick={() => this.selectColor(color.code)}
              />
            )))
          }
        </ColorList>
        <ContrastCheckerWrapper>
          <h3> Foreground Color </h3>
          <ContrastIdentifierWrapper>
            {
              foregroundColor.map((item, index) => (
                <ContrastIdentifier
                  key={index}
                  colorCode={item.code}
                  name={item.name}
                  selectedColor={selectedColor}
                />
              ))
            }
          </ContrastIdentifierWrapper>
        </ContrastCheckerWrapper>
      </Wrapper>
    );
  }
}

ColorContrast.propTypes = {
  shadesColor: PropTypes.array.isRequired,
  foregroundColor: PropTypes.array.isRequired,
};

export default ColorContrast;
