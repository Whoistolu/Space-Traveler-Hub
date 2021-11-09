import React from 'react';
import {
  BroswerRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/header';
import MyProfile from './components/my_Profile';
import Rockets from './components/rockets';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Rockets />
        </Route>
        <Route path="/myProfile">
          <MyProfile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
