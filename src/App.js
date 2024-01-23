import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../public/style.scss';
import HomePage from './components/HomePage.jsx';
import PortfolioPage from './components/PortfolioPage.jsx';
import AboutPage from './components/AboutPage.jsx';
import BlogPage from './components/BlogPage.jsx';
import ConnectPage from './components/ConnectPage.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/connect" element={<ConnectPage />} />
    </Routes>
  );
};

export default App;
