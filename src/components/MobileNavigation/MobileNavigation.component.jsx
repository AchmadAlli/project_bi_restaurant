import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation.component';
import ParadiseIcon from '../../assets/img/logo_paradise.png';
import { ReactComponent as MenuIcon } from '../../assets/img/navigation_icon/menu.svg';
import { Header, NavigationWrapper } from './MobileNavigation.styles';

export default class MobileNavigation extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isActive: false
    }
  }

  handleNavigation(){
    const { isActive } = this.state;
    this.setState({isActive: !isActive})
  }
  
  render() {
    const { isActive } = this.state;
    
    return (
      <React.Fragment>
        <Header>
          <MenuIcon onClick={() => this.handleNavigation()} />
          <img src={ParadiseIcon} alt="paradise_icon"/> 
        </Header>
        <NavigationWrapper 
          isActive={isActive}
          onClick={() => this.handleNavigation()}
        >
          <Navigation />
        </NavigationWrapper>
      </React.Fragment>
    )
  }
}
