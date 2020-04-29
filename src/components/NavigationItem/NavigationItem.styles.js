import styled from 'styled-components';

const Wrapper = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  min-height: 36px;
  padding: 10px 0;
  font-weight: ${({ isActive }) => (isActive ? '500' : 'normal')};
  background: ${({ isActive }) => (isActive ? '#F4F4F4' : 'white')};

  &:hover{
    & a {
      color: #000;
    }

    & svg{
      fill: #00AEEF;
    }
  }
  
  & a{
    flex: 0 0 100%;
    width: 100%;
    font-size: 1em;
    margin: 0 24px;
    color: ${({ isActive }) => (isActive ? '#000' : '#767474')};
    text-decoration: none;
  }

  & svg{
    fill: ${({ isActive }) => (isActive ? '#00AEEF' : '#93D2EA')};
    height: 18px;
    width: 18px;
    margin-right: 1rem;
  }
`;

export default Wrapper;
