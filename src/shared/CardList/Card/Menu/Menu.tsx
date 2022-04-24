import React from 'react';
import {MenuItems} from './MenuItems';
import styles from './menu.css';

export function Menu() {
  return (
    <div className={styles.menu}>
        <a className={styles.menuButton}>
            <svg></svg>
        </a>
        <div className={styles.menuDropDown}>
            <MenuItems />
        </div>
    </div>
  );
}
