import React from 'react';
import {Title} from './Title';
import {MetaData} from "./MetaData";
import styles from './header.css';

export function Header() {
  return (
    <div className={styles.header}>
        <MetaData />
        <Title />
    </div>
  );
}
