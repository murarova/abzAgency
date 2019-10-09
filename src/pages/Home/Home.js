import React from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import AboutMe from '../../components/AboutMe/AboutMe';
import styles from './Home.module.css';

const Home = () => (
  <div className={styles.wrapper}>
    <Header />
    <Banner />
    <AboutMe />
  </div>
);

export default Home;
