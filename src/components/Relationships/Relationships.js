import React from 'react';
import styles from './Relationships.module.css';
import Icon from '../Icon/Icon';

const Relationships = () => (
  <div className={styles.wrapper}>
    <h2 className={styles.title}>About my relationships with web-development</h2>

    <div className={styles.postWrapper}>
      <div className={styles.imgWrapper}>
        <Icon icon="Html" />
      </div>
      <h3 className={styles.subTitle}>I'm in love with HTML</h3>
      <p className={styles.desc}>
        Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.
      </p>
    </div>

    <div className={styles.postWrapper}>
      <div className={styles.imgWrapper}>
        <Icon icon="Css" />
      </div>
      <h3 className={styles.subTitle}>CSS is my best friend</h3>
      <p className={styles.desc}>
        Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document
        written in a markup language like HTML.
      </p>
    </div>

    <div className={styles.postWrapper}>
      <div className={styles.imgWrapper}>
        <Icon icon="JavaScript" />
      </div>
      <h3 className={styles.subTitle}>JavaScript is my passion</h3>
      <p className={styles.desc}>
        JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as
        dynamic, weakly typed, prototype-based and multi-paradigm.
      </p>
    </div>
  </div>
);

export default Relationships;
