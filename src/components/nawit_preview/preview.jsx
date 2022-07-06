import React, { useEffect, useState } from 'react';
import styles from './preview.module.css';

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
        <section className={styles.preview}>
            {posted.map(post=>
            <ul className={styles.lists} key={post.createdAt}>
                <li className={styles.list}>
                    <span className={styles.content}>{post.content}</span>
                    <span className={styles.date}>
                        {`${post.created.year}.${handleDate(post.created.month)}.${handleDate(post.created.day)}
                            ${handleDate(post.created.hour)}:${handleDate(post.created.min)}
                        `}
                    </span>
                </li>
            </ul>
            )}
        </section>
    )
};

export default Preview;