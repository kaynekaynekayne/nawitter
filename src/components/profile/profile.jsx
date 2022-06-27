import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './profile.module.css';

const Profile = ({authService, userObj}) => {
    
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

    return(
        <section className={styles.profile}>
            <div className={styles.container}>
                <h1>Profile</h1>
                <h2>{userObj.userName}</h2>
                <h3>{userObj.userEmail}</h3>
                <h3>{userObj.userId}</h3>
            </div>
            <button onClick={onLogout}>logout</button>
        </section>
    )
};

export default Profile;