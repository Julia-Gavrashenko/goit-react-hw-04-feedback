import React from 'react';
import PropTypes from 'prop-types';
import { OptionButton, OptionWrap } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onFeedbackClick, options }) => {
  return (
    <OptionWrap>
      {options.map(option => (
        <OptionButton type="button" key={option} onClick={onFeedbackClick}>
          {option}
        </OptionButton>
      ))}
    </OptionWrap>
  );
};

FeedbackOptions.propTypes = {
  onFeedbackClick: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.oneOf(['good', 'neutral', 'bad']).isRequired
  ),
};
