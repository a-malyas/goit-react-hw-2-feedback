import React from 'react';
import styles from './Statistics.module.css';
import PropTypes from "prop-types";

const Statistic = ({good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage}) => (
    <div>
    <ul className={styles['statistics-list']}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {countTotalFeedback}</li>
        <li>Positive feedback: {countPositiveFeedbackPercentage}</li>
      </ul>
    </div>
               
);

Statistic.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  countTotalFeedback: PropTypes.number,
  countPositiveFeedbackPercentage: PropTypes.string
}

export default Statistic;