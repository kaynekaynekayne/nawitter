import React from 'react';
import styles from './signup.module.css';

const SignUp = () => {
    
    return(
        <section className={styles.signup}>
            <form className={styles.form__container}>
                <input
                    type="email" 
                    placeholder="이메일" 
                    required
                    className={styles.input}
                />
                <input
                    type="password" 
                    placeholder="비밀번호" 
                    required
                    maxLength={20}
                    className={styles.input}
                />
                <input
                    type="submit" 
                    value="로그인"
                    className={styles.btn}
                    required
                />
            </form>
            <p className={styles.toggle}>
                {true ? "가입 할까요?" : "로그인 할까요?"}
            </p>
        </section>
    )
};

export default SignUp;