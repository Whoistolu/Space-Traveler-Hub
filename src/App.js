import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/header';
import MyProfile from './components/my_Profile';
// import Rockets from './components/rockets';
import RocketElement from './components/RocketElement';

function App() {
  return (
    <>

      <Header />
      <Switch>
        <Route exact path="/">
          <RocketElement />
        </Route>
        <Route path="/myProfile">
          <MyProfile />
        </Route>
      </Switch>

    </>
  );
}

export default App;
