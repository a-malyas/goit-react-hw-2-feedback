import React from 'react';
import PropTypes from "prop-types";
import Statistic from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class Feedback extends React.Component {
    static defaultProps = {
        initialValue: 0,
    };

    static propTypes = {
        inintialValue: PropTypes.number,
    };

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleGoodBtn = () => {
        this.setState(prevState => {
            return {
                good: prevState.good + 1,
            };
        });
    };
    handleNeutralBtn = () => {
        this.setState(prevState => {
            return {
                neutral: prevState.neutral + 1,
            };
        });
    }
    handleBadBtn = () => {
        this.setState(prevState => {
            return {
                bad: prevState.bad + 1,
            };
        });
    }
    countTotalFeedback = () => {
        const arr = Object.values(this.state);
        return arr.reduce((acc, value) => acc + value,0);
    }
    countPositiveFeedbackPercentage = () => {
        if (!this.countTotalFeedback()) return 0;
        const positiveFeedback = Math.floor(this.state.good * 100 / this.countTotalFeedback())+'%';
        return positiveFeedback;
    }
    render() {
        return (
            <div>
                <Section title='Please leave feedback'>
                 <FeedbackOptions
                    onGoodBtn={this.handleGoodBtn}
                    onNeutralBtn={this.handleNeutralBtn}
                    onBadBtn={this.handleBadBtn}
                 />
                </Section>
                
                <Section title='Statistics'>
                    {this.countTotalFeedback() ?
                        <Statistic
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            countTotalFeedback={this.countTotalFeedback()}
                            countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
                        /> :
                        <Notification message="No feedback given" />
                    }
                </Section>
            </div>
        );
    }
    
};

export default Feedback;