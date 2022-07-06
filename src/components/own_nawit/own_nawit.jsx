import React from 'react';
import styles from './own_nawit.module.css';

const OwnNawit = ({post, handleDate}) => {
    
    return(
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
    )
};

export default OwnNawit;