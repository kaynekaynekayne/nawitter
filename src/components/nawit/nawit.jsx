import React,{useState} from 'react';
import styles from './nawit.module.css';

const Nawit = ({nawit, isOwner, firestoreService}) => {

    const [editing,setEditing]=useState(false);
    const [newContent,setNewContent]=useState(nawit.content);

    const deletePost=async(id)=>{
        await firestoreService.deleteContent(id);
    }

    const toggleEdit=()=>setEditing((prev)=>!prev);

    const onSubmit=async(e)=>{
        e.preventDefault();
        await firestoreService.editContent(nawit.id,newContent);
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
                        <div className={styles.updateBox}>
                            <input 
                                type="submit" 
                                value="확인"
                                className={styles.editCheck}
                            />
                            <span 
                                onClick={toggleEdit}
                                className={styles.editCancel}
                            ><i className="fa-solid fa-arrow-rotate-left"></i>
                            </span>
                        </div>
                    </form>
                </>
            ) : (
                <>
                    <p className={styles.content}>{nawit.content}</p>
                    {nawit.attachmentUrl && 
                        <img src={nawit.attachmentUrl} className={styles.uploadImage}/>
                    }
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