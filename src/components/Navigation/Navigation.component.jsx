/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import NavigationItem from '../NavigationItem/NavigationItem.component';
import ParadiseLogo from '../../assets/img/logo_paradise.png';
import { Wrapper, Logo } from './navigation.styles';
import FoundationData from './Navigation.data';
import { ReactComponent as HomeIcon } from '../../assets/img/navigation_icon/home.svg';
import { ReactComponent as SunriseIcon } from '../../assets/img/navigation_icon/sunrise.svg';
import { ReactComponent as BookIcon } from '../../assets/img/navigation_icon/book.svg';
import { ReactComponent as ComponentIcon } from '../../assets/img/navigation_icon/component.svg';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollPosition: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.scrollListener);
  }

  scrollListener() {
    this.setState({ scrollPosition: window.pageYOffset });
  }

  checkChildNavigationPosition() {
    const a = document.getElementById('Colors_3');
    console.log(a);
  }

  render() {
    const { scrollPosition } = this.state;
    this.checkChildNavigationPosition();
    return (
      <Wrapper>
        <Logo src={ParadiseLogo} alt="paradise_logo" />
        <NavigationItem
          name="Home"
          link="/"
          icon={<HomeIcon />}
        />
        <NavigationItem
          name="Get Started"
          link="/getting-started"
          icon={<SunriseIcon />}
        />
        <NavigationItem
          name="Foundations"
          link="/foundations"
          icon={<BookIcon />}
          scrollPosition={scrollPosition}
          childNav={FoundationData}
        />
        <NavigationItem
          name="Components"
          link="/components"
          icon={<ComponentIcon />}
        />
      </Wrapper>
    );
  }
}

export default Navigation;
