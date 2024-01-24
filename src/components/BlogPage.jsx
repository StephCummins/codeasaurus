import React from 'react';
import Header from './Header.jsx';
import Section from './Section.jsx';
import Button from './Button.jsx';
import Footer from './Footer.jsx';

const BlogPage = () => {
  return (
    <div className="blogPage">
      <Header />
      <main>
        <Section title="BLOG">
          <div className="center">
            <p className="highlight">
              Read about my latest projects, technical challenges, and coding
              adventures. View my full blog on Medium.
            </p>
            <Button
              text="Codeasaur on Medium"
              url="https://medium.com/@codeasaur"
            />
          </div>
        </Section>
        <Section className="blogPost" title="January 16, 2023">
          <p>
            Integrating video live streaming into application codebases can be
            expensive and complex for smaller developer teams and startups to
            implement. Learn how I helped lower the barrier to entry for dev
            teams with fewer resources by engineering wave.js, an accessible and
            customizable open source framework for video live streaming. Learn
            about it in the blog post I wrote for wave.js.{' '}
            {/* <a
              href="https://medium.com/@wavejs/introducing-wave-js-accessible-video-live-streaming-for-node-based-dev-environments-bce898a61732"
              target="_blank"
            >
              READ MORE
            </a> */}
          </p>
          <Button
            className="readMore"
            text="Read More"
            url="https://medium.com/@wavejs/introducing-wave-js-accessible-video-live-streaming-for-node-based-dev-environments-bce898a61732"
          />
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
