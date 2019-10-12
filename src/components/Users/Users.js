import React from 'react';
import styles from './Users.module.css';
import User from '../User/User';
import { SecondaryBtn } from '../Button/Button';

const Users = ({ users }) => (
  <div className={styles.wrapper}>
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
    <SecondaryBtn className={styles.btn} name="Show more" />
  </div>
);

export default Users;
