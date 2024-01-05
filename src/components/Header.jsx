import React from 'react';
import MainMenu from './MainMenu.jsx';
import Logo from './Logo.jsx';

export default function Header() {
  return (
    <nav className="header">
      <Logo />
      <MainMenu />
    </nav>
  );
}
