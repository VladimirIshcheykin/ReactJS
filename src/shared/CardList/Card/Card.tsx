import React from 'react';
import {CardHeader} from './CardHeader';
import {CardImg} from './CardImg';
import {CardMenu} from './CardMenu';
import {CardControls} from './CardControls';
import styles from './card.css';

export function Card() {
  return (
    <li className={styles.card}>
		<CardHeader />
		<CardImg />
		<CardMenu />
		<CardControls />
    </li>
  );
}
