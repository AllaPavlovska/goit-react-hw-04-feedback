import React from 'react';
import './Section.module.css';
const Section = ({ title, children }) => (
  <div>
    <h2>{title}</h2>
    {children}
  </div>
);

export default Section;
