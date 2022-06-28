import React from 'react';
import EmailAuth from '../email_auth/emailAuth';
import styles from './login.module.css';

const Login = ({authService}) => {
    
    const onLogin=async(e)=>{
        await authService.login(e.target.name);
    }
    
    return(
        <section className={styles.login}>
            <p className={styles.kwitter}>NAWITTER</p>
            <EmailAuth authService={authService}/>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <button
                        className={styles.button}
                        onClick={onLogin}
                        name="google"
                        >
                        <i id={styles.google} className="fab fa-google"></i>
                    </button>
                </li>
                <li className={styles.item}>
                    <button
                        className={styles.button}
                        onClick={onLogin}
                        name="github"
                        >
                        <i id={styles.github} className="fab fa-github"></i>
                    </button>
                </li>
            </ul>
        </section>
    )
};

export default Login;