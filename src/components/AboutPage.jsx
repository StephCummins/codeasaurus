import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.jsx';
import Section from './Section.jsx';
import Footer from './Footer.jsx';

const AboutPage = () => {
  return (
    <div className="aboutPage">
      <Header />
      <main>
        <Section title="ABOUT">
          <h1>
            Hi. I'm Stephanie.
            <br />
            Thanks for stopping by!
          </h1>
          <p>
            I am a Full-Stack Software Engineer based in the Greater Los Angeles
            Area.
          </p>
          <p>
            I specialize in the broader web tech stack (JavaScript, Node,js,
            React) and strive to incorporate creativity, empathy, and innovation
            into all my work, whether engineering tools for developers or
            consumer products.
          </p>
          <p>
            My experience spans engineering distributed systems, single-page
            applications, servers with RESTful APIs, and open source developer
            tools.
          </p>
          <p>
            My passion for technology stems from my love of coding, problem
            solving, film, and video editing, as well as my previous experience
            collaborating with software engineers to understand their pain
            points and tell their stories for clients across the media and
            entertainment technology space.
          </p>
          <p>
            If you're looking for a dedicated engineer to join your team or next
            project, feel free to{' '}
            <span>
              <strong>
                <Link to="/connect">REACH OUT</Link>.
              </strong>
            </span>
          </p>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
