import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { NotificationMessage } from './Notification message/Notification message';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { GlobalStyle } from 'components/GlobalStyle';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

 

  const collectFeedback = event => {
    const statisticName = event.target.textContent;

    switch (statisticName) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const sum = countTotalFeedback();
    return Math.round((good * 100) / sum);
  };

  return (
    <div>
      <GlobalStyle />
      <Section title="Please leave feedback">
        <FeedbackOptions
          onFeedbackClick={collectFeedback}
          options={['good', 'neutral', 'bad']}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <NotificationMessage message={'There is no feedback'} />
        )}
      </Section>
    </div>
  );
};
