import React from 'react';
import styles from './User.module.css';

const User = ({ photo, name, position, email, phone }) => (
  <>
    <div className={styles.imgWrapper}>
      <img src={photo} alt="user avatar" />
    </div>
    <div className={styles.userName}>{name}</div>
    <div className={styles.userInfo}>{position}</div>
    <div className={styles.userInfo}>{email}</div>
    <div className={styles.userInfo}>{phone}</div>
  </>
);

export default User;
