import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div>
        <img id="logo" src="https://cdn-icons-png.flaticon.com/512/3212/3212608.png" alt="" />
        <h1>Space Travelers</h1>
      </div>
      <nav>
        <div>
          <ul>
            <li>
              <NavLink to="/" activeClassName="is-active" className="navLink">Rockets</NavLink>

            </li>
            <li>
              <NavLink to="/myProfile" className="navLink"> My Profile</NavLink>
            </li>
            <li>
              <NavLink to="/missions" className="navLink"> Missions</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
