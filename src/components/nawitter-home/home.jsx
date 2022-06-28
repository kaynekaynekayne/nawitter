import React, { useEffect, useState } from 'react';
import styles from './home.module.css';
import NawitAdd from '../nawit_add/nawit_add';
import Nawit from '../nawit/nawit';

const Home = ({userObj, nawitService}) => {
    
    const [nawits,setNawits]=useState([]);

    useEffect(()=>{

        nawitService.getContent(nawits=>{
            setNawits(nawits);
        });
        
    },[]);

    return(
        <section className={styles.home}>
            <NawitAdd userObj={userObj} nawitService={nawitService}/>
            <div>

            </div>
        </section>
    )
};

export default Home;