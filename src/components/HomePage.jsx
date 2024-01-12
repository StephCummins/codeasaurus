import React from 'react';
import Header from './Header.jsx';
import Section from './Section.jsx';
import wave from '../../public/assets/wavejs_portfolio.png';
import floof from '../../public/assets/floof_portfolio.png';
import cerebro from '../../public/assets/cerebro_portfolio.png';
import ProjectHighlights from './ProjectHighlights.jsx';
import Footer from './Footer.jsx';

const HomePage = () => {
  return (
    <div className="homePage">
      <Header />
      <main>
        <Section title="HELLO, WORLD!">
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
            developing and testing full stack CRUD applications with RESTful
            APIs, I am a results-driven engineer with proficiency across the
            broader
            {'  '}
            <span>
              <strong>WEB TECH STACK</strong>
            </span>
            .
          </p>
          <p>
            My passion for technology stems from my love of coding, problem
            solving, film, and video editing, as well as my previous experience
            collaborating with software engineers to understand their pain
            points and tell their stories for clients across the media and
            entertainment technology space.
          </p>
        </Section>
        <Section title="TECH STACK">
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
          <div className="center">
            <img
              src={require('../../public/assets/line.png')}
              alt="Decorative Line"
            />
          </div>
          <p>
            Additionally, I have <span>BASIC EXPERIENCE</span> with the
            following technologies:
          </p>
          <p className="highlight center">
            TypeScript<span> • </span>SQL (PostgreSQL)<span> • </span>Redux
            <span> • </span>Testing (Jest, Supertest)<span> • </span>Webpack
            <span> • </span>Docker<span> • </span>Authentication<span> • </span>
            CI/CD<span> • </span>AWS (S3, EC2, DynamoDB, Elastic Beanstalk)
          </p>
        </Section>
        <Section title="PROJECT HIGHLIGHTS">
          <div className="frontpageProjects">
            <ProjectHighlights
              image={wave}
              alt="wave.js Portfolio Image"
              role="Software Engineer | wave.js"
              description="Scalable video live streaming framework for Node.js dev environments,
            featuring multi-stream support for real-time RTMP ingest, encoding to
            HLS and MPEG-DASH, and low-latency live stream delivery."
            />
            <ProjectHighlights
              image={floof}
              alt="floof Portfolio Image"
              role="Software Engineer | floof"
              description="Social networking app targeted at pet owners and animal lovers. floof is a small-scale distributed system with a Node.js server at the core to streamline HTTP requests to endpoints, including retrieving images and data from AWS on the cloud."
            />
            <div className="break"></div>
            <ProjectHighlights
              image={cerebro}
              alt="Cerebro Portfolio Image"
              role="Software Engineer | Cerebro"
              description="Personalized learning app featuring a virtual AI tutor, powered by openAI’s API, for self-paced, interactive study sessions."
            />
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
