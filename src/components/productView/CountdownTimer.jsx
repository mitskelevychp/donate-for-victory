import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./ProductView.module.scss";

function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();

    return difference > 0
      ? {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
      : null;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isTimerExpired, setIsTimerExpired] = useState(false);
  const [status, setStatus] = useState("Активний збір");

  useEffect(() => {
    const timer = setTimeout(() => {
      const updatedTimeLeft = calculateTimeLeft();
      setTimeLeft(updatedTimeLeft);
      if (updatedTimeLeft === null) {
        setIsTimerExpired(true);
        setStatus("Завершений збір");
      }
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className={isTimerExpired ? styles.timerExpired : null}>
      {isTimerExpired ? (
        <span className={styles.timerExpiredText}>{status}</span>
      ) : (
        <div>
          {timeLeft ? (
            <span>
              {timeLeft.days}
              {" "}
              дн.
              {timeLeft.hours}
              {" "}
              год.
              {timeLeft.minutes}
              {" "}
              хв.
              {timeLeft.seconds}
              {" "}
              сек.
            </span>
          ) : (
            <span className={styles.endTime}>00:00:00</span>
          )}
        </div>
      )}
    </div>
  );
}

export default CountdownTimer;

CountdownTimer.propTypes = {
  targetDate: PropTypes.string.isRequired,
};
