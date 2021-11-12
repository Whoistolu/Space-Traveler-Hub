import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/header';
import MyProfile from './components/my_Profile';
import Missions from './components/missions';
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
        <Route path="/missions">
          <Missions />
        </Route>
      </Switch>

    </>
  );
}

export default App;
