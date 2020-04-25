import styled from 'styled-components';

export const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 50px auto 0;
  padding: 0 24px;

  @media(min-width: 1440px){
    max-width: 1600px;
  }

  @media(max-width: 1364px){
    max-width: 1200px;
  }

  @media(max-width: 767px){
    max-width: 100%
  }

`;

export const NavigationWrapper = styled.div`
  position: relative;
  min-width: 240px;
  max-width: 240px;

  & img{
    max-width: calc(100% - 56px);
    margin: 10px 24px;
  }

  @media(max-width: 767px){
    display: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
