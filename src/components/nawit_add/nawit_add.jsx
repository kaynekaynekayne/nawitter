import React from 'react';
import styles from './nawit_add.module.css';

const NawitAdd = () => {


    return(
        <form className={styles.form}>
            <div className={styles.container}>
                <input
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