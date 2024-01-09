import React from 'react';
import { Link } from 'react-router-dom';

const mainMenu = () => {
  return (
    <ul className="mainMenu">
      <li>
        <strong>
          <Link to="/portfolio">PORTFOLIO</Link>
        </strong>
      </li>
      <li>
        <strong>
          <Link to="/about">ABOUT</Link>
        </strong>
      </li>
      <li>
        <strong>
          <Link to="/blog">BLOG</Link>
        </strong>
      </li>
      <li>
        <strong>
          <Link to="/contact">CONTACT</Link>
        </strong>
      </li>
    </ul>
  );
};

export default mainMenu;
