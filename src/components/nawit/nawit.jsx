import React,{useState} from 'react';
import styles from './nawit.module.css';

const Nawit = ({nawit, isOwner, nawitService}) => {

    const [editing,setEditing]=useState(false);
    const [newContent,setNewContent]=useState(nawit.content);

    const deletePost=async(id)=>{
        await nawitService.deleteContent(id);
    }

    const toggleEdit=()=>setEditing((prev)=>!prev);

    const onSubmit=async(e)=>{
        e.preventDefault();
        await nawitService.editContent(nawit.id,newContent);
        setEditing(false);
    }

    const onChange=(event)=>{
        const {
            target: {value},
        }=event;
        setNewContent(value);
    }

    return(
        <section className={styles.nawit}>
            {editing ? (
                <>
                    <form onSubmit={onSubmit}>
                        <textarea 
                            onChange={onChange}
                            value={newContent}
                            type="text"
                            required
                            maxLength="150"
                            className={styles.textarea}
                            autoFocus
                        />
                        <input 
                            type="submit" 
                            value="확인"
                            className={styles.editCheck}
                        />
                    </form>
                    <button onClick={toggleEdit}>취소</button>
                </>
            ) : (
                <>
                    <div className={styles.contentBox}>
                        <p className={styles.content}>{nawit.content}</p>
                    </div>
                    <div className={styles.action}>
                        <p className={styles.nickname}>@{nawit.creatorName}</p>
                        {isOwner && (
                            <div className={styles.actionButtons}>
                                <button 
                                    className={styles.button}
                                    onClick={toggleEdit}
                                    >수정
                                </button>
                                <button 
                                    className={styles.button}
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