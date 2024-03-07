import React from 'react';
import Header from './Header.jsx';
import Section from './Section.jsx';
import Button from './Button.jsx';
import PortfolioProject from './PortfolioProject.jsx';
import wave from '../../public/assets/wavejs_portfolio.png';
import floof from '../../public/assets/floof_portfolio.png';
import cerebro from '../../public/assets/cerebro_portfolio.png';
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
        <Section title="wave.js">
          <div className="center">
            <PortfolioProject image={wave} alt="wave.js Portfolio Image">
              <p>
                <span>
                  <strong>TECH STACK</strong>
                </span>
              </p>
              <p>
                JavaScript<span> • </span>Node<span> • </span>Express
                <span> • </span>React<span> • </span>FFmpeg / fluent-ffmpeg
                <span> • </span>Video Codecs / Streaming Protocols (RTMP, HLS,
                MPEG-DASH)<span> • </span>node.net (TCP server, sockets, event
                emitters)
              </p>
              <p>
                <span>
                  <strong>PROBLEM</strong>
                </span>
              </p>
              <p>
                <span>
                  <strong>SOLUTION</strong>
                </span>
              </p>
              <p>
                <span>
                  <strong>CHALLENGES</strong>
                </span>
              </p>
              <p>
                <span>
                  <strong>NEXT STEPS</strong>
                </span>
              </p>
            </PortfolioProject>
          </div>
        </Section>
        <Section title="floof">
          <div className="center">
            <PortfolioProject image={floof} alt="floof Portfolio Image">
              <p>
                <span>
                  <strong>TECH STACK</strong>
                </span>
              </p>
              <p>
                JavaScript<span> • </span>Node<span> • </span>Express
                <span> • </span>React<span> • </span>FFmpeg / fluent-ffmpeg
                <span> • </span>Video Codecs / Streaming Protocols (RTMP, HLS,
                MPEG-DASH)<span> • </span>node.net (TCP server, sockets, event
                emitters)
              </p>
              <p>
                <span>
                  <strong>PROBLEM</strong>
                </span>
              </p>
              <p>
                <span>
                  <strong>SOLUTION</strong>
                </span>
              </p>
              <p>
                <span>
                  <strong>CHALLENGES</strong>
                </span>
              </p>
              <p>
                <span>
                  <strong>NEXT STEPS</strong>
                </span>
              </p>
            </PortfolioProject>
          </div>
        </Section>
        <Section title="Cerebro">
          <div className="center">
            <PortfolioProject image={cerebro} alt="Cerebro Portfolio Image">
              <p>
                <span>
                  <strong>TECH STACK</strong>
                </span>
              </p>
              <p>
                JavaScript<span> • </span>Node<span> • </span>Express
                <span> • </span>React<span> • </span>FFmpeg / fluent-ffmpeg
                <span> • </span>Video Codecs / Streaming Protocols (RTMP, HLS,
                MPEG-DASH)<span> • </span>node.net (TCP server, sockets, event
                emitters)
              </p>
              <p>
                <span>
                  <strong>PROBLEM</strong>
                </span>
              </p>
              <p>
                <span>
                  <strong>SOLUTION</strong>
                </span>
              </p>
              <p>
                <span>
                  <strong>CHALLENGES</strong>
                </span>
              </p>
              <p>
                <span>
                  <strong>NEXT STEPS</strong>
                </span>
              </p>
            </PortfolioProject>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
