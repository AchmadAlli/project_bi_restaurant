import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 140px;
  padding: 10px;
  margin: 0 6px;
  text-align: center;


  &:first-child{
    margin-left: 0
  }

  &:last-child{ColorItems.styles
    margin-right: 0
  }

  & h4{
    margin: 0 0 10px;
    color: #4A4A4A
  }
`;

export const ColorBox = styled.div`
  height: 130px;
  width: 130px;
  margin-bottom: 20px;
  background: ${ props => props.code };
  border-radius: 4px;
  box-shadow: 0 2px 2px 0 rgba(180,180,180,0.2), 0 3px 1px -2px rgba(180,180,180,0.3), 0 1px 5px 0 rgba(180,180,180,0.4);
`;
