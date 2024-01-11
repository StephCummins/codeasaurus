import React from 'react';

const Section = ({ title, children }) => {
  return (
    <div>
      <div className="triangle top"></div>
      <section>
        <h2>{title}</h2>
        <article>{children}</article>
      </section>
      <div className="triangle bottom"></div>
    </div>
  );
};

export default Section;
