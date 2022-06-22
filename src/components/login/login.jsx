import React from 'react';
import SignUp from '../signup/signup';
import styles from './login.module.css';

const Login = () => {
    
    return(
        <section className={styles.login}>
            <SignUp />
            <ul className={styles.list}>
                <li className={styles.item}>
                    <button
                        className={styles.button}
                        >
                        <i id={styles.google} className="fab fa-google"></i>
                    </button>
                </li>
                <li className={styles.item}>
                    <button
                        className={styles.button}
                        >
                        <i id={styles.github} className="fab fa-github"></i>
                    </button>
                </li>
            </ul>
        </section>
    )
};

export default Login;