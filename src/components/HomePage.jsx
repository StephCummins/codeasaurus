import React from 'react';
import Header from './Header.jsx';
import Section from './Section.jsx';

const HomePage = () => {
  return (
    <div className="homePage">
      <Header />
      <Section title="Hello, World!">
        <p>
          I am a{'  '}
          <span>
            <strong>FULL STACK SOFTWARE ENGINEER</strong>
          </span>
          {'  '}
          with a passion for creating through technology, contributing to open
          source developer tools and products, and design.
        </p>
        <p>
          Whether engineering video solutions for developers, creating
          interactive and responsive design-driven user interfaces, or
          developing and testing full stack CRUD applications with RESTful APIs,
          I am a results-driven engineer with proficiency across the broader
          {'  '}
          <span>
            <strong>WEB TECH STACK</strong>
          </span>
          .
        </p>
        <p>
          My passion for technology stems from my love of coding, problem
          solving, film, and video editing, as well as my previous experience
          collaborating with software engineers to understand their pain points
          and tell their stories for clients across the media and entertainment
          technology space.
        </p>
      </Section>
      <Section title="Tech Stack">
        <p>
          I have <span>STRONG EXPERIENCE</span> in the following technologies:
        </p>
        <p className="highlight center">
          JavaScript<span> • </span>React
          <span> • </span>Node<span> • </span>
          Express<span> • </span>RESTful APIs<span> • </span>NoSQL
          (MongoDB/Mongoose)<span> • </span>Git/GitHub<span> • </span>HTML
          <span> • </span>CSS/Sass<span> • </span>Video Technologies, Codecs,
          and Streaming Protocols<span> • </span>Adobe (Premiere Pro, After
          Effects, Photoshop)
        </p>
        <p>
          Additionally, I have basic experience with the following technologies:
        </p>
        <p className="secondary center">
          TypeScript<span> • </span>SQL (PostgreSQL)<span> • </span>Redux
          <span> • </span>Testing (Jest, Supertest)<span> • </span>Webpack
          <span> • </span>Docker<span> • </span>Authentication<span> • </span>
          CI/CD<span> • </span>AWS (S3, EC2, DynamoDB, Elastic Beanstalk)
        </p>
      </Section>
      <Section title="Project Highlights">
        <p>My recent project highlights include:</p>
      </Section>
    </div>
  );
};

export default HomePage;
