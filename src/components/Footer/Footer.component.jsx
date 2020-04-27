import React from 'react';
import {
  Wrapper, FooterLink, Legal, LinkGroup,
} from './Footer.styles';

const Footer = () => (
  <Wrapper>
    <LinkGroup>
      <FooterLink to="/"> Get Started </FooterLink>
      <FooterLink to="/"> Fuondations </FooterLink>
      <FooterLink to="/"> Components </FooterLink>
    </LinkGroup>
    <Legal> 2020 Come Indonesia. All Rights Reserved. </Legal>
  </Wrapper>
);

export default Footer;
