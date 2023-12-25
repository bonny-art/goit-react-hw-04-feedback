import React, { useState } from 'react';
import { Section, Statistics, FeedbackOptions, Notification } from 'components';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countFeedback = statsKey => {
    setFeedback(prev => ({ ...prev, [statsKey]: prev[statsKey] + 1 }));
  };

  const countTotalFeedback = () =>
    feedback.good + feedback.neutral + feedback.bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round(100 * (feedback.good / countTotalFeedback())) || 0;

  const totalFeedback = countTotalFeedback();
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();

  const statsKeys = Object.keys(feedback);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={statsKeys} onLeaveFeedback={countFeedback} />
      </Section>

      <Section title="Statistics">
        {totalFeedback > 0 ? (
          <Statistics
            statsKeys={statsKeys}
            statsData={feedback}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
