import React from 'react';
import styles from './nawit.module.css';

const Nawit = ({nawit, isOwner}) => {

    return(
        <section className={styles.nawit}>
                <div className={styles.contentBox}>
                    <p className={styles.content}>{nawit.content}</p>
                </div>
                <div className={styles.bottomBox}>
                    <p className={styles.nickname}>@{nawit.creatorName}</p>
                    {isOwner && (
                        <div className={styles.buttons}>
                            <button 
                                className={`${styles.edit} ${styles.button}`}
                                >수정
                            </button>
                            <button 
                                className={`${styles.delete} ${styles.button}`}
                                >삭제
                            </button>
                        </div>
                    )}
                </div>
        </section>
    )
};

export default Nawit;