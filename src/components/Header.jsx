import React from 'react';
import { Link } from 'react-router-dom';
import MainMenu from './MainMenu.jsx';
import Logo from './Logo.jsx';

const Header = () => {
  return (
    <div className="header">
      <nav>
        <Link to="/">
          <Logo />
        </Link>
        <MainMenu />
      </nav>
      <div className="triangleMenu"></div>
    </div>
  );
};

export default Header;
