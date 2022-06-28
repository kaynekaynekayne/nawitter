import React from 'react';
import styles from './home.module.css';
import NawitAdd from '../nawit_add/nawit_add';

const Home = ({userObj, nawitService}) => {
    
    return(
        <section className={styles.home}>
            <NawitAdd userObj={userObj} nawitService={nawitService}/>
        </section>
    )
};

export default Home;