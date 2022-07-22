import React, { useEffect, useState } from 'react';
import styles from './home.module.css';
import NawitAdd from '../nawit_add/nawit_add';
import Nawit from '../nawit/nawit';

const Home = ({userObj, firestoreService}) => {
    
    const [nawits,setNawits]=useState([]);

    useEffect(()=>{
        firestoreService.getAllContents(nawits=>{
            setNawits(nawits);
        });
    },[]);

    return(
        <section className={styles.home}>
            <NawitAdd 
                userObj={userObj} 
                firestoreService={firestoreService}
            />
            <div>
                {nawits.map(nawit=>(
                    <Nawit
                        key={nawit.id}
                        nawit={nawit}
                        isOwner={nawit.creatorId===userObj.uid}
                        firestoreService={firestoreService}
                    />
                ))}
            </div>
        </section>
    )
};

export default Home;