import React, { useRef, useState, useContext } from 'react';
import styles from './nawit_add.module.css';
import StorageContext from '../../context/StorageContext';

const NawitAdd = ({firestoreService,userObj}) => {

    const {storageService}=useContext(StorageContext);
    
    const inputRef=useRef();
    const [attachment,setAttachment]=useState("");
    const [previewImg, setPreviewImg]=useState(null);

    const onSubmit=async(e)=>{
        e.preventDefault();
        const nawit=inputRef.current.value;

        let attachmentUrl="";
        let date=new Date();
    
        if(attachment!==""){
            const uploaded=await storageService.uploadImage(attachment);
            attachmentUrl=uploaded;
        }

        const nawitObj={
            content:nawit,
            createdAt:Date.now(),
            created:{
                year:date.getFullYear(),
                month:date.getMonth()+1,
                day:date.getDate(),
                hour:date.getHours(),
                min:date.getMinutes(),
            },
            creatorId:userObj.uid,
            creatorName:userObj.displayName,
            attachmentUrl,
        }

        try{
            await firestoreService.uploadContent(nawitObj);
        } catch(error){
            alert(error);
        };
        
        inputRef.current.value="";
        setAttachment("");
        setPreviewImg("");
    }

    const onFileChange=(event)=>{
        const {
            target: {files}
        }=event;

        const imageUrl=URL.createObjectURL(files[0]);
        setPreviewImg(imageUrl);
        setAttachment(files[0]);
    }

    const onClearAttachment=()=>{
        setAttachment("");
        setPreviewImg(null);
    }

    return(
        <>
            <form className={styles.form} onSubmit={onSubmit}>
                <div className={styles.container}>
                    <input
                        ref={inputRef}
                        className={styles.input} 
                        type="text"
                        placeholder="say everything you want"
                        maxLength="150"
                        autoFocus
                    />
                    <label htmlFor="file-upload" className={styles.chooseImg}>
                        <i className="fas fa-image"></i>
                    </label>
                    <input 
                        id="file-upload"
                        type="file"
                        aria-label="upload image"
                        style={{display:"none"}}
                        onChange={onFileChange}
                    />
                    <button className={styles.submit} type="submit" aria-label="submit content">
                        <i className="fas fa-pen"></i>
                    </button>
                </div>
                {attachment && 
                    <div className={styles.preview}>
                        <img 
                            className={styles.previewImage}
                            src={previewImg}
                            height="auto"
                            style={{maxWidth:'5rem'}}
                            alt="preview photo"
                        />
                        <span onClick={onClearAttachment} className={styles.previewClear}>
                            <i className="fa-solid fa-xmark"></i>
                        </span>
                    </div>
                }
            </form>
        </>
    )
};

export default NawitAdd;