import React from 'react';
import {CardCounter} from './CardCounter';
import {CardComments} from './CardComments';
import {CardActions} from './CardActions';
import styles from './cardcontrols.css';

export function CardControls() {
  return (
    <div className={styles.cardControls}>
        <CardCounter />
        <CardComments />
        <CardActions />
    </div>
  );
}
