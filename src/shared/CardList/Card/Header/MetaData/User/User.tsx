import React from 'react';
import {UserAvatar} from "./UserAvatar";
import {UserName} from './UserName';
import styles from './user.css';

export function User() {
  return (
    <a className={styles.user}>
        <UserAvatar />
        <UserName />
    </a>
  );
}
