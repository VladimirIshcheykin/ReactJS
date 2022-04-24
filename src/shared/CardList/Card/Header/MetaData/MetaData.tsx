import React from 'react';
import styles from './metadata.css';
import {User} from "./User";
import {DateAdd} from "./DateAdd";

export function MetaData() {
  return (
    <div className={styles.metaData}>
        <User />
        <DateAdd />
    </div>
  );
}
