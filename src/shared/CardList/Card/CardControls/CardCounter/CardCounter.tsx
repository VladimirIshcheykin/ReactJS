import React from 'react';
import styles from './cardcounter.css';

export function CardCounter() {
  return (
    <div className={styles.cardCounter}>
        <a className={styles.cardCounterUp}><svg></svg></a>
        <span className={styles.cardCounterValue}>123</span>
        <a className={styles.cardCounterDown}><svg></svg></a>
    </div>
  );
}
