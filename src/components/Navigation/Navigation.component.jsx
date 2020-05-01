/* eslint-disable class-methods-use-this */
import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem.component';
import LogoProject from '../../assets/img/logo.png';
import { Wrapper, Logo } from './navigation.styles';
import { ReactComponent as HomeIcon } from '../../assets/img/navigation_icon/pie.svg';
import { ReactComponent as Penjualan } from '../../assets/img/navigation_icon/payment.svg';
import { ReactComponent as Pendapatan } from '../../assets/img/navigation_icon/money.svg';
import { ReactComponent as Restaurant } from '../../assets/img/navigation_icon/restaurant.svg';

const Navigation = () => (
  <Wrapper>
    <Logo src={LogoProject} alt="peoject_logo" />
    <NavigationItem
      name="Dashboard"
      link="/"
      icon={<HomeIcon />}
    />
    <NavigationItem
      name="Penjualan"
      link="/penjualan"
      icon={<Penjualan />}
    />
    <NavigationItem
      name="Pemasukan"
      link="/pemasukan"
      icon={<Pendapatan />}
    />
    <NavigationItem
      name="Produk"
      link="/produk"
      icon={<Restaurant />}
    />
  </Wrapper>
);

export default Navigation;
