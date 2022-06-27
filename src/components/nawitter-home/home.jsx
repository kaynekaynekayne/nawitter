import React from 'react';
import styles from './home.module.css';
import NawitAdd from '../nawit_add/nawit_add';

const Home = ({userObj}) => {
    
    return(
        <section className={styles.home}>
            <NawitAdd userObj={userObj} />
        </section>
    )
};

export default Home;