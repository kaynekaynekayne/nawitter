import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './profile.module.css';
import Preview from '../nawit_preview/preview';

const Profile = ({authService, userObj, refreshUser, firestoreService}) => {

    const [newDisplayName, setNewDisplayName]=useState(userObj.displayName);
    
    let navigate=useNavigate();
    const onLogout=()=>{
        const ok=window.confirm("로그아웃 하시겠습니까?");
        if(ok){
            authService.logout()
            .then(()=>navigate("/"));
        } else{
            return;
        }
    }

    const onChange=(event)=>{
        const {target:{value},}=event;
        setNewDisplayName(value);
    }

    const onSubmit=async(e)=>{
        e.preventDefault();
        if(userObj.displayName!==newDisplayName){
            await authService.updateNickname(newDisplayName);
        }        
        refreshUser();
    }


    return(
        <section className={styles.profile}>
            <div className={styles.container}>
                <p className={styles.introduction}>
                    @{userObj.displayName}{userObj.displayName.endsWith('s') ? "'" : "'s"} nickname</p>
                <form className={styles.form} onSubmit={onSubmit}>
                    <input 
                        className={styles.input}
                        type="text"
                        placeholder="display name"
                        value={newDisplayName}
                        maxLength="25"
                        onChange={onChange}
                    />
                    <input 
                        className={styles.submit}
                        type="submit"
                        value="✔"
                    />
                </form>
            </div>
            <Preview userObj={userObj} firestoreService={firestoreService}/>
            <button onClick={onLogout} className={styles.logout}>EXIT</button>
        </section>
    )
};

export default Profile;