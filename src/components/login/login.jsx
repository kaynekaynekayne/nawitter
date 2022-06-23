import React from 'react';
import SignUp from '../signup/signup';
import styles from './login.module.css';

const Login = ({authService}) => {
    
    const onLogin=async(e)=>{ //async 버전
        const result=await authService.login(e.target.name);
        console.log(result);
    }
    return(
        <section className={styles.login}>
            <p className={styles.kwitter}>KWITTER</p>
            <SignUp authService={authService}/>
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