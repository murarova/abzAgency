import React from 'react';
import styles from './Bunner.module.css';
import { PrimeryBtn } from '../Button/Button';

const Banner = () => (
  <div className={styles.wrapper}>
    <h2 className={styles.title}>Test assignment for Frontend Developer position</h2>
    <p className={styles.desc}>
      We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository.{' '}
    </p>
    <PrimeryBtn name="Sign Up" />
  </div>
);

export default Banner;
