import React from 'react';
import styles from './cardtitle.css';

export function CardTitle() {
  return (
    <h2 className={styles.cardTitle}>
      <a href="#post-url" className={styles.cardTitleLink}>Противоположная точка зрения на данную проблему</a>
    </h2>
  );
}
