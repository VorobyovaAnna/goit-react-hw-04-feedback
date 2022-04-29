import React from 'react';
import PropTypes from 'prop-types';
import { ButtonList } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {Object.keys(options).map(option => (
        <li key={option}>
          <button
            type="button"
            onClick={() => onLeaveFeedback(option)}
            key={option}
            name={option}
          >
            {option}
          </button>
        </li>
      ))}
    </ButtonList>
  );
};

FeedbackOptions.propeTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
