import React from 'react';
import { Link } from 'react-dom';

function Header() {
  return (
    <header>
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
