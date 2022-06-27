import React from 'react';
import styles from './home.module.css';
import Header from '../header/header';

const Home = ({userObj}) => {
    
    return(
        <section className={styles.home}>
            {/* <Header /> */}
            <div className={styles.container}>
                <h1>home</h1>
                <h2>{userObj.userName}</h2>
                <h3>{userObj.userEmail}</h3>
                <h3>{userObj.userId}</h3>
            </div>
        </section>
    )
};

export default Home;