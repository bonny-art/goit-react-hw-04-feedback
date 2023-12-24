import css from './Statistics.module.css';

export const Statistics = ({
  statsKeys,
  statsData,
  total,
  positivePercentage,
}) => {
  console.log('statsData :>> ', statsData);
  return (
    <div className={css.container}>
      <div className={css.mainStats}>
        {statsKeys.map(statsKey => {
          return (
            <div key={statsKey} className={css.statsRow}>
              <p className={css.statsTitle}>{statsKey}: </p>
              <p className={css.statsData}>{statsData[statsKey]}</p>
            </div>
          );
        })}
      </div>
      <div className={css.statsRow}>
        <p className={css.statsTitle}>Total: </p>
        <p className={css.statsData}>{total}</p>
      </div>
      <div className={css.statsRow}>
        <p className={css.statsTitle}>Positive feedback: </p>
        <p className={css.statsData}>{positivePercentage}%</p>
      </div>
    </div>
  );
};
