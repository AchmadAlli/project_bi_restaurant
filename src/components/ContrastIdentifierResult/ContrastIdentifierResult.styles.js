import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  border: 1px solid #4A4A4A;
  margin: 0 6px;
  text-align: center;

  &:first-child{
    margin-left: 0;
  }

  &:last-child{
    margin-right: 0;
  }
`;

export const Color = styled.div`
  position: relative;
  display: flex;
  min-height: 64px;
  min-width: 64px;
  background: ${(props) => props.colorCode || '#00AEEF'};

  & span{
    margin: auto;
    font-size: ${(props) => (props.size === 'small' ? '1em' : '1.3em')};
    color: ${(props) => props.foreground}
  }
`;

export const Result = styled.p`
  font-weight: 500;
  margin: 5px auto;

  &:last-child{
    margin: 0;
    padding:5px;
    color: white;
    background: ${(props) => (props.status ? '#36AD35' : '#DC102E')}
  }
`;
