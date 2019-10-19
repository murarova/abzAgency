/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import styles from './Users.module.css';
import User from '../User/User';
import { SecondaryBtn } from '../Button/Button';

const Users = ({ users }) => (
  <div className={styles.wrapper}>
    <a name="users"></a>
    <h2 className={styles.title}>Our cheerful users</h2>
    <p className={styles.desc}>Attention! Sorting users by registration date</p>
    {users.map(user => (
      <div className={styles.user}>
        <User
          key={user.id}
          photo={user.photo}
          name={user.name}
          position={user.position}
          email={user.email}
          phone={user.phone}
        />
      </div>
    ))}
    <div className={styles.btnWrapper}>
      <SecondaryBtn name="Show more" />
    </div>
  </div>
);

export default Users;
