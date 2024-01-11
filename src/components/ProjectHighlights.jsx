import React from 'react';

const ProjectHighlights = ({ image, alt }) => {
  return (
    <div className="projectHighlights">
      <div className="center">
        <img src={image} alt={alt} />
        <h3>Software Engineer | wave.js (Open Source)</h3>
        <p>
          Scalable video live streaming framework for Node.js dev environments,
          featuring multi-stream support for real-time RTMP ingest, encoding to
          HLS and MPEG-DASH, and low-latency live stream delivery.
        </p>
      </div>
      <div className="highlightsText"></div>
    </div>
  );
};

export default ProjectHighlights;
