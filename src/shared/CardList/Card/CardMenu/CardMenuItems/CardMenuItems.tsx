import React from 'react';
import styles from './cardmenuitems.css';

export function CardMenuItems() {
  return (
    <ul className={styles.cardMenuItems}>
		<li className={styles.cardMenuItem}><svg></svg><a>Скрыть</a></li>
		<li className={styles.cardMenuItem}><svg></svg><a>Пожаловаться</a></li>
		<li className={styles.divider}></li>
		<li className={styles.cardMenuItem}><svg></svg><a>Закрыть</a></li>
    </ul>
  );
}
