import React from 'react';
import styles from './FeedbackOptions.module.css';
import PropTypes from "prop-types";


class FeedbackOptions extends React.Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div className={styles['button-list']}>
        {options.map((option) => (
          <button className={styles['button']} key={option} onClick={onLeaveFeedback} name={option}>
            {option}
          </button>
        ))}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.string)
}



export default FeedbackOptions;