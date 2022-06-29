import React,{useState} from 'react';
import styles from './nawit.module.css';

const Nawit = ({nawit, isOwner, nawitService}) => {

    const [editing,setEditing]=useState(false);
    const [newContent,setNewContent]=useState(nawit.content);

    const deletePost=async(id)=>{
        await nawitService.deleteContent(id);
    }

    const toggleEdit=()=>setEditing((prev)=>!prev);

    return(
        <section className={styles.nawit}>
            {editing ? (
                <>
                
                </>
            ) : (
                <>
                    <div className={styles.contentBox}>
                        <p className={styles.content}>{nawit.content}</p>
                    </div>
                    <div className={styles.bottomBox}>
                        <p className={styles.nickname}>@{nawit.creatorName}</p>
                        {isOwner && (
                            <div className={styles.buttons}>
                                <button 
                                    className={`${styles.edit} ${styles.button}`}
                                    onClick={toggleEdit}
                                    >수정
                                </button>
                                <button 
                                    className={`${styles.delete} ${styles.button}`}
                                    onClick={()=>deletePost(nawit.id)}
                                    >삭제
                                </button>
                            </div>
                        )}
                    </div>
                </>
            )}
        </section>
    )
};

export default Nawit;