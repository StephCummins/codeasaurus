import React from 'react';

const ProjectHighlights = ({ image, alt, role, description }) => {
  return (
    <div className="projectHighlights center">
      <img src={image} alt={alt} />
      <h3>{role}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectHighlights;
