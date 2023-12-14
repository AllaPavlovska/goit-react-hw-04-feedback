import React from 'react';
import './FeedbackOptions.module.css';


const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className="container">
    {options.map((option) => (
      <button key={option} onClick={() => onLeaveFeedback(option)}>
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;



