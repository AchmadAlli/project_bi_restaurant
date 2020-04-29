import styled from 'styled-components';

export const Wrapper = styled.ul`
  list-style-type: none;
  padding-inline-start: 55px;
`;

export const ChildName = styled.p`
  font-size: 1em;
  margin: 10px 0 5px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-left: 5px;
  color: #4A4A4A;

  &:first-child{
    color: #000;
  }

  :before{
    content: '';
    min-height: 10px;
    min-width: 10px;
    margin-right: 5px;
    border-radius: 5px;
    background: #00AEEF;
  }
`;
