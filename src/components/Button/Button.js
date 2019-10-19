import React from 'react';
import styles from './Button.module.css';

export const PrimeryBtn = ({ name }) => <button className={styles.primeryBtn}>{name}</button>;

export const SecondaryBtn = ({ name }) => <button className={styles.secondaryBtn}>{name}</button>;

export const DisabledBtn = ({ name }) => (
  <button className={styles.disabledBtn} disabled>
    {name}
  </button>
);
