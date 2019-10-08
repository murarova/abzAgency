import React from 'react';
import styles from './Header.module.css';
import DropDown from '../DropDown/DropDown';
import Icon from '../Icon/Icon';

const Header = () => (
    <header className={styles.header}>
        <div className={styles.logo}>
            <Icon icon="Logo" className={styles.logo} />
        </div>
        <DropDown />
    </header>
);

export default Header;
