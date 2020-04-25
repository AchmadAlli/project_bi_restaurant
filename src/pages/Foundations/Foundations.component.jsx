import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Colors from '../Colors/Colors.component';

const Foundations = () => (
  <Switch>
    <Route exact path="/foundations/" render={() => <Redirect to="/foundations/colors" />} />
    <Route path="/foundations/colors" component={Colors} />
  </Switch>
);

export default Foundations;
