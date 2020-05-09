import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const SalesWrapper = styled.div`
  display: flex;
  width: 64%;
`;

export const SalesDetail = styled.div`
  display: flex;
  width: 35%;
  flex-direction: column;

  & .cellData inline-block{
    // text-align: center;
    font-size: 2rem
  }
`;
