import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 48px 0;
  background: #EAEAEA;
  z-index: 9999;
`;

export const LinkGroup = styled.div`
  display: flex;

  @media(max-width: 767px){
    flex-direction: column
  }
`;

export const FooterLink = styled(Link)`
  margin: 0 35px;
  color: #4A4A4A;
  text-decoration: none;
  font-weight: 600;

   &:first-child{
    margin-left: 0;
  }

  &:last-child{
    margin-right: 0;
  }

  @media(max-width: 767px){
    margin: 10px 0;
  }
`;

export const Legal = styled.p`
  margin: 24px 0 0;
  font-size: .9em;
  color: #4A4A4A;
`;
