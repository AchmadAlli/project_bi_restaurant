import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation.component';
import LogoProject from '../../assets/img/logo.png';
import { ReactComponent as MenuIcon } from '../../assets/img/navigation_icon/menu.svg';
import { Header, NavigationWrapper } from './MobileNavigation.styles';

export default class MobileNavigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  handleNavigation() {
    const { isActive } = this.state;
    this.setState({ isActive: !isActive });
  }

  render() {
    const { isActive } = this.state;

    return (
      <>
        <Header>
          <MenuIcon onClick={() => this.handleNavigation()} />
          <img src={LogoProject} alt="paradise_icon" />
        </Header>
        <NavigationWrapper
          isActive={isActive}
          onClick={() => this.handleNavigation()}
        >
          <Navigation />
        </NavigationWrapper>
      </>
    );
  }
}
