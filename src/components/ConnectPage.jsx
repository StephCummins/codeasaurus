import React from 'react';
import Header from './Header.jsx';
import Section from './Section.jsx';
import Footer from './Footer.jsx';

const ConnectPage = () => {
  return (
    <div className="contactPage">
      <Header />
      <main>
        <Section title="CONNECT">
          <div className="connectIcons">
            <div className="column">
              <img
                className="icon"
                src={require('../../public/assets/email_icon.png')}
                alt="Email icon"
              />
              <p>EMAIL</p>
            </div>
            <div className="column">
              <img
                className="icon"
                src={require('../../public/assets/github_icon.png')}
                alt="GitHub icon by Icons8"
              />
              <p>GITHUB</p>
            </div>
            <div className="column">
              <img
                className="icon"
                src={require('../../public/assets/linkedin_icon.png')}
                alt="LinkedIn icon by Icons8"
              />
              <p>LINKEDIN</p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default ConnectPage;
