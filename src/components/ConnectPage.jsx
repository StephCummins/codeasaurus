import React from 'react';
import Header from './Header.jsx';
import Section from './Section.jsx';
import Button from './Button.jsx';
import Footer from './Footer.jsx';

const ConnectPage = () => {
  return (
    <div className="contactPage">
      <Header />
      <main>
        <Section title="CONNECT">
          <p className="highlight center">
            <h1>Want to connect?</h1>
            I'm open to new career opportunities and contract projects.
            <br />
            <br />
            Feel free to reach out, network on LinkedIn, or view my full
            portfolio on GitHub.
          </p>
          <div className="center">
            <img
              src={require('../../public/assets/line.png')}
              alt="Decorative Line"
            />
          </div>
          <div className="connectIcons">
            <div className="column">
              <a
                href="mailto:the.codeasaur@gmail.com&subject=Website Inquiry"
                target="_blank"
              >
                <img
                  className="icon"
                  src={require('../../public/assets/email_icon.png')}
                  alt="Email icon"
                />
              </a>
              <Button
                text="EMAIL"
                url="mailto:the.codeasaur@gmail.com&subject=Website Inquiry"
              />
            </div>

            <div className="column">
              <a
                href="https://www.linkedin.com/in/steph-cummins/"
                target="_blank"
              >
                <img
                  className="icon"
                  src={require('../../public/assets/linkedin_icon.png')}
                  alt="LinkedIn icon by Icons8"
                />
              </a>
              <Button
                text="LINKEDIN"
                url="https://www.linkedin.com/in/steph-cummins/"
              />
            </div>
            <div className="column">
              <a href="https://github.com/StephCummins" target="_blank">
                <img
                  className="icon"
                  src={require('../../public/assets/github_icon.png')}
                  alt="GitHub icon by Icons8"
                />
              </a>
              <Button text="GITHUB" url="https://github.com/StephCummins" />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default ConnectPage;
