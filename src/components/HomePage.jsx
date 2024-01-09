import React from 'react';
import Header from './Header.jsx';
import Section from './Section.jsx';

const HomePage = () => {
  return (
    <div className="homePage">
      <Header />
      <Section title="Hello, World!">
        <p>
          I am a{' '}
          <span>
            <strong>FULL STACK SOFTWARE ENGINEER</strong>
          </span>{' '}
          with a passion for creating through technology, contributing to open
          source developer tools and products, and design.
        </p>
      </Section>
    </div>
  );
};

export default HomePage;
