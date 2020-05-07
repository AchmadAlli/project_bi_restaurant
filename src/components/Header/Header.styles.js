import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #FAFAFA;
  border-radius: 4px;
  padding: 10px 30px 10px 20px;
`;

export const Title = styled.h2`
  margin: 0;
  color: #2d2d2d
`;

export const HideElement = {
  display: 'none',
};

export const SelectWrapper = styled.div`
  display: flex;

  & div{
    margin: 0 10px;
  }
`;
