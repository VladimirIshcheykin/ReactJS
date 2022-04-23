import React from 'react';
import styles from './cardcomments.css';

export function CardComments() {
  return (
    <div className={styles.cardComments}>
      <a className={styles.cardCommentsButton}>
        <svg></svg>
        <span className={styles.cardCommentsNumber}>27</span>
      </a>
    </div>
  );
}
