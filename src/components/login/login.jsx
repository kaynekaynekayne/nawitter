import React from 'react';
import styles from './login.module.css';

const Login = () => {
    
    return(
        <section className={styles.login}>
            <p>Nawitter</p>
            <section className={styles.list_email}>
                <form className={styles.form}>
                    <input 
                        type="email"
                        placeholder="email"
                        required
                        // value
                        className={styles.email}
                    />
                    <input 
                        type="password"
                        placeholder="password"
                        required
                        maxLength={20}
                        // value
                        className={styles.password}
                    />
                    <input 
                        type="submit"
                        // value
                        className={styles.submit_btn}
                        required
                    />

                </form>
                <button 
                    className={styles.toggle}
                    >click
                </button>
            </section>

            <ul className={styles.list_provider}>
                <li className={styles.item}>
                    <button
                        className={styles.button}>Google</button>
                </li>
                <li className={styles.item}>
                    <button
                        className={styles.button}>Github</button>
                </li>
            </ul>
        </section>
    )
};

export default Login;