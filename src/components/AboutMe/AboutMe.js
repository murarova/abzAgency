import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AboutMe.module.css';
import Icon from '../Icon/Icon';

const AboutMe = () => (
  <div className={styles.wrapper}>
    <h2 className={styles.title}>Let's get acquainted</h2>
    <div className={styles.imgWrapper}>
      <Icon icon="ManMobile" />
    </div>
    <h3 className={styles.subTitle}>I am cool frontend developer</h3>
    <p className={styles.desc}>
      When real users have a slow experience on mobile, they're much less likely to find what they are looking for or
      purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when more
      than half of visits are abandoned if a mobile page takes over 3 seconds to load.
    </p>
    <p className={styles.desc}>
      Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience on the
      web.
    </p>
    <Link className={styles.link} to="#">Sign Up</Link>
  </div>
);

export default AboutMe;
