import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { NotificationMessage } from './Notification message/Notification message';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { GlobalStyle } from 'components/GlobalStyle';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  collectFeedback = event => {
    const statisticName = event.target.textContent;

    this.setState(prevState => ({
      [statisticName]: prevState[statisticName] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const sum = this.countTotalFeedback();
    return Math.round((good * 100) / sum);
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        <Section title="Please leave feedback">
          <FeedbackOptions
            onFeedbackClick={this.collectFeedback}
            options={['good', 'neutral', 'bad']}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <NotificationMessage message={'There is no feedback'} />
          )}
        </Section>
      </div>
    );
  }
}
