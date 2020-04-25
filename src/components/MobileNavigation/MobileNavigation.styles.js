import styled from 'styled-components';

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 0 10px;
  min-height: 60px;
  background: white;
  box-shadow: 0 2px 2px 0 rgba(180,180,180,0.2), 0 3px 1px -2px rgba(180,180,180,0.3), 0 1px 5px 0 rgba(180,180,180,0.4);
  z-index: 9993;

  & svg.menu{
    fill: black;
    height: 32px;
    width: 32px;
  }

  & img{
    height: 42px;
    margin-left: 20px;
  }

  @media(min-width: 768px){
    display: none;
  }
`;

export const NavigationWrapper = styled.div`
  position: fixed;
  left: 0;
  height: 100%;
  width: 100%;
  background: #101a21ba;
  z-index: 9999;

  display: ${({ isActive }) => (isActive ? 'block' : 'none')}
`;
