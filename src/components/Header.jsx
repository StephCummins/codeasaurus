import React from 'react';
import { Link } from 'react-router-dom';
import MainMenu from './MainMenu.jsx';
import Logo from './Logo.jsx';

const Header = () => {
  return (
    <nav className="header">
      <Link to="/">
        <Logo />
      </Link>
      <MainMenu />
    </nav>
  );
};

export default Header;
