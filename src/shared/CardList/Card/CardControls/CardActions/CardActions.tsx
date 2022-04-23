import React from 'react';
import {CardShare} from './CardShare';
import {CardSave} from './CardSave';
import styles from './cardactions.css';

export function CardActions() {
  return (
    <div className={styles.cardActions}>
        <CardShare />
        <CardSave />
    </div>
  );
}
