import React from 'react';
import {CardMenuItems} from './CardMenuItems';
import styles from './cardmenu.css';

export function CardMenu() {
  return (
    <div className={styles.cardMenu}>
        <a className={styles.cardMenuButton}>
            <svg></svg>
        </a>
        <div className={styles.cardMenuDropDown}>
            <CardMenuItems />
        </div>
    </div>
  );
}
