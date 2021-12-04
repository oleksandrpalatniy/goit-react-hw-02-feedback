import React from 'react';
import styles from './feedback.module.css';

const FeedbackOptions = ({
  buttonClickGood,
  buttonClickNeutral,
  buttonClickBad,
}) => {
  return (
    <div className={styles.button_container}>
      <button type="button" onClick={buttonClickGood}>
        Good
      </button>
      <button type="button" onClick={buttonClickNeutral}>
        Neutral
      </button>
      <button type="button" onClick={buttonClickBad}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
