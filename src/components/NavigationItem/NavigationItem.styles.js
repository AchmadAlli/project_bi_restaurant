import styled from 'styled-components';

const Wrapper = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  min-height: 36px;
  padding: 10px 0;
  font-weight: ${({ isActive }) => (isActive ? '500' : 'normal')};
  background: ${({ isActive }) => (isActive ? '#333333' : '#242423')};

  &:hover{
    & a {
      color: #FFFFFF;
    }

    & svg{
      fill: #FFFFFF;
    }
  }
  
  & a{
    flex: 0 0 100%;
    width: 100%;
    font-size: 1em;
    margin: 0 24px;
    color: ${({ isActive }) => (isActive ? '#FFFFFF' : '#767474')};
    text-decoration: none;
  }

  & svg{
    fill: ${({ isActive }) => (isActive ? '#FFFFFF' : '#767474')};
    height: 24px;
    width: 24px;
    margin-right: 1rem;
  }
`;

export default Wrapper;
