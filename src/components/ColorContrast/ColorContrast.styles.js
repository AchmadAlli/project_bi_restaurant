import styled from 'styled-components';

export const ContrastCheckerWrapper = styled.div`
  display: block;
  // flex-direction: row;
  // max-width: calc(100% - 320px);
  // flex-wrap: wrap;
  margin: 0 30px;

  @media(max-width: 767px){
    margin: 20px 0 0;
  }
`;

export const ColorList = styled.div`
  display: flex;
  max-width: 260px;
  flex-wrap: wrap;
  margin: 0 30px;

  @media(max-width: 767px){
    max-width: 100%;
    margin: 0;
  }
`;

export const ColorItem = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  background: ${(props) => props.code};
  cursor: pointer;
  border: 1px solid ${(props) => (props.isSelected ? 'red' : props.code)};

  @media(max-width: 767px){
    width: 19%;
    height: 60px
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media(max-width: 767px){
    flex-direction: column
  }

  & h3{
    flex: 0 0 100%;
  }

  & ${ColorList}{
    margin-left: 0;
  }

  & ${ContrastCheckerWrapper}{
    margin-right: 0;
  }

`;

export const ContrastIdentifierWrapper = styled.div`
  display: flex;

  @media(max-width: 767px){
    flex-direction: column;
    align-items: center;
  }
`;
