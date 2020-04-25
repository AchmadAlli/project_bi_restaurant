import React from 'react';
import Navigation from './components/Navigation/Navigation.component';
import ParadiseLogo from './assets/img/logo_paradise.png';
import Home from './pages/Home/Home.component';
import GettingStarted from './pages/GettingStarted/GettingStarted.component';
import Foundations from './pages/Foundations/Foundations.component'
import ComponentPage from './pages/ComponentPage/ComponentPage.component';
import { BrowserRouter , Route, Switch } from 'react-router-dom'
import { ContentWrapper, NavigationWrapper, Wrapper } from './App.styles';

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <NavigationWrapper>
          <Navigation />
        </NavigationWrapper>
        <ContentWrapper>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/getting-started' component={GettingStarted} />
            <Route path='/foundations' component={Foundations} />
            <Route path='/components' component={ComponentPage} />
          </Switch>
        </ContentWrapper>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
