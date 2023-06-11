import React from 'react';
import css from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={css.buttonsWrapper}>
      {options.map(name => (
        <button
          className={css.optionButton}
          key={name}
          name={name}
          onClick={onLeaveFeedback}
          type="button"
        >
          {name}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;
