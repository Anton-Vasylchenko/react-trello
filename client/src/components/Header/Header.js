import React from 'react'
import styles from './Header.module.css';
import BoardAdd from '../Board/BoardAdd';

function Header() {
    return (
        <header className={styles.header}>
            <BoardAdd />
        </header>
    )
}

export default Header