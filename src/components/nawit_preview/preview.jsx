import React, { useEffect, useState } from 'react';
import styles from './preview.module.css';
import OwnNawit from '../own_nawit/own_nawit';

const Preview = ({firestoreService, userObj}) => {
    
    const [posted,setPosted]=useState([]);

    const handleDate=(time)=>{
        if(time<10){
            return `0${time}`;
        } else{
            return time;
        }
    }

    useEffect(()=>{
        getMyPosts();
    },[]);

    const getMyPosts=async()=>{
        await firestoreService.getMyContents(userObj.uid, posted=>{
            setPosted(posted)
        })
    }

    return(
        <>
            <p className={styles.title}
                >@{userObj.displayName}{userObj.displayName.endsWith('s') ? "'" : "'s"} posts
            </p>
            <section className={styles.preview}>
                {posted.map(post=>
                    <OwnNawit post={post} handleDate={handleDate} key={post.id}/>
                )}
            </section>
        </>
    )
};

export default Preview;