import React from 'react';
import styles from './cardmetadata.css';
import {CardUser} from "./CardUser";
import {CardDateAdd} from "./CardDateAdd";

export function CardMetaData() {
  return (
    <div className={styles.cardMetaData}>
        <CardUser />
        <CardDateAdd />
    </div>
  );
}
