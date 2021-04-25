import React from 'react';
import styles from './FeedbackOptions.module.css';
import PropTypes from "prop-types";


const FeedbackOptions = ({onGoodBtn, onNeutralBtn, onBadBtn}) => (
    <div>
        <ul className={styles['button-list']}>
            <li>
                <button type='button' className={styles['button']} onClick={onGoodBtn}>Good</button>
            </li>
            <li>
                <button type='button' className={styles['button']} onClick={onNeutralBtn}>Neutral</button>
            </li>
            <li>
                <button type='button' className={styles['button']} onClick={onBadBtn}>Bad</button>
            </li>
        </ul>
    </div>
);

FeedbackOptions.propTypes = {
    onGoodBtn: PropTypes.func,
    onNeutralBtn: PropTypes.func,
    onBadBtn: PropTypes.func
}



export default FeedbackOptions;