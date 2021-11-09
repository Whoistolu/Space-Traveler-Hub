import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/header';
import MyProfile from './components/my_Profile';
import Rockets from './components/rockets';

function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route exact path="/">
          <Rockets />
        </Route>
        <Route path="/myProfile">
          <MyProfile />
        </Route>
      </Routes>

    </>
  );
}

export default App;
