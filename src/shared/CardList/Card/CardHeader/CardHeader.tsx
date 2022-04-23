import React from 'react';
import {CardTitle} from './CardTitle';
import {CardMetaData} from "./CardMetaData";
import styles from './cardheader.css';

export function CardHeader() {
  return (
    <div className={styles.cardHeader}>
        <CardMetaData />
        <CardTitle />
    </div>
  );
}
