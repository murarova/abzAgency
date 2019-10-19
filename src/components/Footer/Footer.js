import React from 'react';
import Icon from '../Icon/Icon';
import styles from './Footer.module.css';

const sectionName = [
  {
    name: 'About me',
    link: '#about'
  },
  {
    name: 'Relationships',
    link: '#relationships'
  },
  {
    name: 'Requirements',
    link: '#requirements'
  },
  {
    name: 'Users',
    link: '#users'
  },
  {
    name: 'Sign Up',
    link: '#signUp'
  }
];

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.footerOne}>
      <div className={styles.logo}>
        <Icon icon="Logo" fill="white" />
      </div>
      <ul className={styles.menu}>
        {sectionName.map((el, index) => (
          <li key={index} className={styles.menuItem}>
            <a href={el.link}>{el.name}</a>
          </li>
        ))}
      </ul>
    </div>

    <div className={styles.footerTwo}>
      <div className={styles.contacts}>
        <p className={styles.contactItem}>work.of.future@gmail.com</p>
        <p className={styles.contactItem}>+38 (050) 789 24 98</p>
        <p className={styles.contactItem}>+38 (095) 556 08 45</p>
      </div>
      <div className={styles.icons}>
        <Icon icon="Facebook" />
        <Icon icon="Linkedin" />
        <Icon icon="Instagram" />
        <Icon icon="Twitter" />
        <Icon icon="Pinterest" />
      </div>
      <span className={styles.copyright}>© abz.agency specially for the test task</span>
    </div>
  </div>
);

export default Footer;
