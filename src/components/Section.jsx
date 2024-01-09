import React from 'react';

const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className="sectionChild">{title}</h2>
      <article className="sectionChild">{children}</article>
    </section>
  );
};

export default Section;
