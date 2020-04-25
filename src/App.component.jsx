import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation.component';
import MobileNavigation from './components/MobileNavigation/MobileNavigation.component';
import Home from './pages/Home/Home.component';
import GettingStarted from './pages/GettingStarted/GettingStarted.component';
import Foundations from './pages/Foundations/Foundations.component';
import ComponentPage from './pages/ComponentPage/ComponentPage.component';
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
            <Route path="/getting-started" component={GettingStarted} />
            <Route path="/foundations" component={Foundations} />
            <Route path="/components" component={ComponentPage} />
          </Switch>
        </ContentWrapper>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
