import React from 'react';
import Header from './Header.jsx';
import Section from './Section.jsx';
import Footer from './Footer.jsx';

const AboutPage = () => {
  return (
    <div className="aboutPage">
      <Header />
      <main>
        <Section title="ABOUT">
          <p>Welcome to my portfolio site.</p>
          <p>
            I am a Full-Stack Software Engineer based in the Greater Los Angeles
            Area. I specialize in the broader web tech stack (JavaScript,
            Node,js, React) and strive to incorporate creativity, empathy, and
            innovation into all my work, whether engineering tools for
            developers or consumer products.
          </p>
          <p>Thanks for stopping by!</p>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
