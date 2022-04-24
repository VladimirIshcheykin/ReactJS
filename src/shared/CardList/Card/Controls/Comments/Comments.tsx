import React from 'react';
import styles from './comments.css';

export function Comments() {
  return (
    <div className={styles.comments}>
      <a className={styles.commentsButton}>
        <svg></svg>
        <span className={styles.commentsNumber}>27</span>
      </a>
    </div>
  );
}
