import React from 'react';
import styles from './title.css';

export function Title() {
  return (
    <h2 className={styles.title}>
      <a href="#post-url" className={styles.cardTitleLink}>Противоположная точка зрения на данную проблему</a>
    </h2>
  );
}
