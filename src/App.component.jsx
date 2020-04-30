import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation.component';
import MobileNavigation from './components/MobileNavigation/MobileNavigation.component';
import Footer from './components/Footer/Footer.component';
import Home from './pages/Home/Home.component';
import Pemasukan from './pages/Pemasukan/Pemasukan.component';
import Penjualan from './pages/Penjualan/Penjualan.component';
import Produk from './pages/Produk/Produk.component';
import { ContentWrapper, NavigationWrapper, Wrapper } from './App.styles';

function App() {
  return (
    <BrowserRouter>
      <MobileNavigation />
      <Wrapper>
        <NavigationWrapper>
          <Navigation />
        </NavigationWrapper>
        <ContentWrapper>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/penjualan" component={Penjualan} />
            <Route path="/pemasukan" component={Pemasukan} />
            <Route path="/produk" component={Produk} />
          </Switch>
        </ContentWrapper>
      </Wrapper>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
