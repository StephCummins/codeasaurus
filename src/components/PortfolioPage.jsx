import React from 'react';
import Header from './Header.jsx';
import Section from './Section.jsx';
import Button from './Button.jsx';
import Footer from './Footer.jsx';

const PortfolioPage = () => {
  return (
    <div className="portfolioPage">
      <Header />
      <main>
        <Section title="PORTFOLIO">
          <div className="center">
            <p className="highlight">
              Learn more about my featured projects below, and view the full
              code on GitHub.
            </p>
            <Button
              text="Codeasaur on GitHub"
              url="https://github.com/StephCummins"
            />
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
