import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import styles from './header.css';

function HeaderComponent() {
    return (
        <header>
            <h1 className={styles.example}>Hello React!!!</h1>
            <p>This is Table!</p>
            <table className={styles.table}>
                <tbody>
                    <tr>
                        <td>111</td>
                        <td>222</td>
                        <td>333</td>
                    </tr>
                    <tr>
                        <td>444</td>
                        <td>555</td>
                        <td>666</td>
                    </tr>
            </tbody>
            </table>
        </header>
    );
}

export const Header = hot(HeaderComponent);