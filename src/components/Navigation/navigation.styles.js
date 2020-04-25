import styled from 'styled-components';

export const Wrapper = styled.ul`
  position: fixed;
  width: 240px;
  height: 100vh;
  list-style-type: none;
  padding-inline-start: 0;
  margin-top: 0;
  background: white;
`;

export const Logo = styled.img`
  max-width: 100%;

  @media(max-width: 767px){
    max-width: 60%;
    margin: 10px 24px;
  }
`;