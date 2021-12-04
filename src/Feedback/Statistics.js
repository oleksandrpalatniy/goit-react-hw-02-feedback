import React from 'react';
import styles from './feedback.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <div className={styles.Fb_container}>
      <div className={styles.statistics_container}>
        <span>Statistics</span>
        <span>Good:{good}</span>
        <span>Neutral:{neutral}</span>
        <span>Bad:{bad}</span>
      </div>
      <div className={styles.results_container}>
        <span>Total:{countTotalFeedback}</span>
        <span>Positive feedback:{countPositiveFeedbackPercentage}%</span>
      </div>
    </div>
  );
};

export default Statistics;
