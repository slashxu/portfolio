import React from  'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-materialize';

import Home from './pages/home';
import Experience from './pages/experiences';
import Education from './pages/education';
import Contact from './pages/contact';

const Routes = () => (
  <main>
    <Container>
      <Switch>
        <Route exact path='/portfolio' component={Home}/>
        <Route path='/experience' component={Experience}/>
        <Route path='/education' component={Education}/>
        <Route path='/contact' component={Contact}/>
      </Switch>
    </Container>
  </main>  
);

export default Routes;