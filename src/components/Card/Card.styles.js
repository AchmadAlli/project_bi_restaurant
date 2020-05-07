import styled from 'styled-components';

const sizeCoverter = (size) => {
  switch (size) {
    case 'full': return 100;
    case 'fullOnWrapper': return 100;
    case 'medium': return 46;
    case 'small': return 23;
    default: return 100;
  }
};

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  width: ${(props) => sizeCoverter(props.size)}%;
  margin: 10px 0 20px ;
  border-radius: 4px;

  & img{
    width: 100%;
    max-width: 100%;
  }
`;

export const spinnerSyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  margin: 'auto',
  bottom: 0,
  display: 'block',
  zIndex: -1,
  height: '57px',
  color: '#00AAEF',
};
