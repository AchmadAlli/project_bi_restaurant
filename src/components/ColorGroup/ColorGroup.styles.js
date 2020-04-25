import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: ${({ isMixSize }) => (isMixSize ? '100%' : '530px')};

  @media(max-width: 767px){
    flex-direction: column;
    margin-bottom: 30px;
  }
`;

export default Wrapper;
