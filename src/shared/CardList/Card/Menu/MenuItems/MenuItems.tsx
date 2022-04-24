import React from 'react';
import styles from './menuitems.css';

export function MenuItems() {
  return (
    <ul className={styles.menuItems}>
		<li className={styles.menuItem}><svg></svg><a>Скрыть</a></li>
		<li className={styles.menuItem}><svg></svg><a>Пожаловаться</a></li>
		<li className={styles.divider}></li>
		<li className={styles.menuItem}><svg></svg><a>Закрыть</a></li>
    </ul>
  );
}
