import React from 'react';
import { Link } from 'react-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/" className="navLink">Rockets</Link>

        </li>
        <li>
          <Link to="/my_Profile" className="navLink"> My Profile</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
