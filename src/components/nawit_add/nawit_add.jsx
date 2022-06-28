import React, { useRef } from 'react';
import styles from './nawit_add.module.css';

const NawitAdd = ({nawitService,userObj}) => {

    const inputRef=useRef();
    
    const onSubmit=async(e)=>{
        e.preventDefault();
        const nawit=inputRef.current.value;
        console.log(nawit);

        let date=new Date();
    
        const nawitObj={
            content:nawit,
            created:{
                year:date.getFullYear(),
                month:date.getMonth()+1,
                day:date.getDate(),
                hour:date.getHours(),
                min:date.getMinutes(),
            },
            creatorId:userObj.uid,
            creatorName:userObj.displayName,
        }

        try{
            await nawitService.uploadContent(nawitObj)
        } catch(error){
            alert(error);
        };
        
        inputRef.current.value="";
    }

    return(
        <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.container}>
                <input
                    ref={inputRef}
                    className={styles.input} 
                    type="text"
                    placeholder="say everything you want"
                    maxLength="120"
                    // value={}
                    autoFocus
                />
                <label htmlFor="file-upload" className={styles.chooseImg}>
                    <i className="fas fa-image"></i>
                </label>
                <input 
                    id="file-upload"
                    type="file"
                    style={{display:"none"}}
                />
                <button className={styles.submit} type="submit">
                    <i className="fas fa-pen"></i>
                </button>
            </div>

        </form>
    )
};

export default NawitAdd;