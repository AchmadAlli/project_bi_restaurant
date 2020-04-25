import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  font-weight: ${({isActive}) => (isActive ? '500' : 'normal')};
  background: ${({isActive}) => (isActive ? '#F4F4F4' : 'white')};

  &:hover{
    & a {
      color: #000;
    }

    & svg{
      fill: #00AEEF;
    }
  }
  
  & a{
    width: 100%;
    font-size: 1em;
    margin: 0 24px;
    color: ${({isActive}) => (isActive ? '#000' : '#767474')};
    text-decoration: none;
  }

  & svg{
    fill: ${({isActive}) => (isActive ? '#00AEEF' : '#93D2EA')};
    height: 18px;
    width: 18px;
    margin-right: 1rem;
  }
`;