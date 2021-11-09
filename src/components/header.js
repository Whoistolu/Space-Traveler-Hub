import React from 'react';
import { Link } from 'react-router-dom';

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
              <Link to="/" className="navLink">Rockets</Link>

            </li>
            <li>
              <Link to="/myProfile" className="navLink"> My Profile</Link>
            </li>
            <li>
              <Link to="/mission" className="navLink"> Missions</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
