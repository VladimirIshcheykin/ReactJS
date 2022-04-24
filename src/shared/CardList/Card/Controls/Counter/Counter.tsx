import React from 'react';
import styles from './counter.css';

export function Counter() {
  return (
    <div className={styles.counter}>
        <a className={styles.counterUp}><svg></svg></a>
        <span className={styles.counterValue}>123</span>
        <a className={styles.counterDown}><svg></svg></a>
    </div>
  );
}
