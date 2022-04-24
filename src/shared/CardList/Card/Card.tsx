import React from 'react';
import {Header} from './Header';
import {Image} from './Image';
import {Menu} from './Menu';
import {Controls} from './Controls';
import styles from './card.css';

export function Card() {
  return (
    <li className={styles.card}>
		<Header />
		<Image />
		<Menu />
		<Controls />
    </li>
  );
}
