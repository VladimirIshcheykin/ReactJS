import React from 'react';
import styles from './actions.css';

export function Actions() {
  return (
    <div className={styles.actions}>
        <a className={styles.share}>
            <svg></svg>
        </a>
        <a className={styles.save}>
            <svg></svg>
        </a>
    </div>
  );
}
