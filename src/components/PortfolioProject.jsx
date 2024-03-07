import React from 'react';

const PortfolioProject = ({ image, alt, children }) => {
  return (
    <>
      <img src={image} alt={alt} />
      <article>{children}</article>
    </>
  );
};

export default PortfolioProject;
