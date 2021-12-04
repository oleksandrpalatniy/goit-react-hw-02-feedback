import React from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import { Section } from './Section';
import { NotificationMessage } from './notification';

class Feedback extends React.Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  buttonClickGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  buttonClickNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  buttonClickBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback() {
    let totalFeedBack = this.state.good + this.state.neutral + this.state.bad;
    return totalFeedBack;
  }

  countPositiveFeedbackPercentage() {
    if (!this.countTotalFeedback()) return;
    let positivePercentage = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100,
    );
    return positivePercentage;
  }
  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          buttonClickGood={this.buttonClickGood}
          buttonClickNeutral={this.buttonClickNeutral}
          buttonClickBad={this.buttonClickBad}
        />
        {this.countTotalFeedback() ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            countTotalFeedback={this.countTotalFeedback()}
            countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <NotificationMessage />
        )}
      </Section>
    );
  }
}

export default Feedback;
