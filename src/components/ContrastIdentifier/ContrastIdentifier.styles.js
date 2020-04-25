import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px;
  margin: 0 50px;

  &:first-child{
    margin-left: 0;
    padding-left: 0;
    
    @media(max-width: 767px){
      margin: 0 auto 20px;
    }
  }

  @media(max-width: 767px){
    margin: 0 auto 20px;
  }
`;

export const ColorInformation = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  & h4{
    margin: 5px 0;
  }
`;

export const Color = styled.div`
  display: flex;
  min-height: 48px;
  min-width: 48px;
  background: ${(props) => props.colorCode};
  margin-right: 20px;
  box-shadow: 0 2px 2px 0 rgba(180,180,180,0.2), 0 3px 1px -2px rgba(180,180,180,0.3), 0 1px 5px 0 rgba(180,180,180,0.4);
`;

export const ResultWrapper = styled.div`
  display: flex;
`;
