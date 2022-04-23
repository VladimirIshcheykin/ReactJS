import React from 'react';
import {CardUserAvatar} from "./CardUserAvatar";
import {CardUserName} from './CardUserName';
import styles from './carduser.css';

export function CardUser() {
  return (
    <a className={styles.cardUser}>
        <CardUserAvatar />
        <CardUserName />
    </a>
  );
}
