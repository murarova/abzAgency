import React from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import AboutMe from '../../components/AboutMe/AboutMe';
import Relationships from '../../components/Relationships/Relationships';
import Requirements from '../../components/Requirements/Requirements';
import Users from '../../components/Users/Users';
import users from '../../assets/users.json';
import AuthForm from '../../components/AuthForm/AuthForm';
import Footer from '../../components/Footer/Footer';
import styles from './Home.module.css';

const Home = () => (
  <div className={styles.wrapper}>
    <Header />
    <Banner />
    <AboutMe />
    <Relationships />
    <Requirements />
    <Users users={users} />
    <AuthForm />
    <Footer />
  </div>
);

export default Home;
