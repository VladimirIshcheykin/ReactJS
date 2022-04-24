import React from 'react';
import {Counter} from './Counter';
import {Comments} from './Comments';
import {Actions} from './Actions';
import styles from './controls.css';

export function Controls() {
  return (
    <div className={styles.controls}>
        <Counter />
        <Comments />
        <Actions />
    </div>
  );
}
