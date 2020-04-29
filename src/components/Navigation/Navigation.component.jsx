/* eslint-disable class-methods-use-this */
import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem.component';
import LogoProject from '../../assets/img/logo.png';
import { Wrapper, Logo } from './navigation.styles';
import { ReactComponent as HomeIcon } from '../../assets/img/navigation_icon/home.svg';
import { ReactComponent as SunriseIcon } from '../../assets/img/navigation_icon/sunrise.svg';
import { ReactComponent as BookIcon } from '../../assets/img/navigation_icon/book.svg';
import { ReactComponent as ComponentIcon } from '../../assets/img/navigation_icon/component.svg';

const Navigation = () => (
  <Wrapper>
    <Logo src={LogoProject} alt="peoject_logo" />
    <NavigationItem
      name="Dashboard"
      link="/"
      icon={<HomeIcon />}
    />
    <NavigationItem
      name="item-1"
      link="/getting-started"
      icon={<SunriseIcon />}
    />
    <NavigationItem
      name="item2"
      link="/foundations"
      icon={<BookIcon />}
    />
    <NavigationItem
      name="item3"
      link="/components"
      icon={<ComponentIcon />}
    />
  </Wrapper>
);

export default Navigation;
