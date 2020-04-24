import React from 'react';
import Colors from '../Colors/Colors.component';
import { Switch, Route } from 'react-router-dom';

const Foundations = () => {
  return (
    <Switch>
      <Route exact path='/foundations/' component={Colors} />
      <Route path='/foundations/colors' component={Colors} />
    </Switch>
  )
}

export default Foundations;