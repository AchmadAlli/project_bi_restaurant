import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Colors from '../Colors/Colors.component';

const Foundations = () => (
  <Switch>
    <Route exact path="/foundations/" component={Colors} />
    <Route path="/foundations/colors" component={Colors} />
  </Switch>
);

export default Foundations;
