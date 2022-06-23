import React,{useRef,useState} from 'react';
import styles from './emailAuth.module.css';

const EmailAuth = ({authService}) => {
    
    const emailRef=useRef();
    const passwordRef=useRef();
    const formRef=useRef();
    const [newAccount,setNewAccount]=useState(true);
    const [error,setError]=useState("");

    const toggleAccount=()=>setNewAccount(prev=>!prev);

    const onSubmit = async (e)=>{
        e.preventDefault();
        const userEmail=emailRef.current.value;
        const userPassword=passwordRef.current.value;
        try{
            if(newAccount){
                const uploaded = await authService.signup(userEmail,userPassword);
                console.log(uploaded);
            } else{
                const uploaded=await authService.loginWithEmail(userEmail,userPassword);
                console.log(uploaded);
                console.log('login 완료');
            }
        }catch(error){
            setError(error.message);
        }

        formRef.current.reset();
    }

    return(
        <section className={styles.emailAuth}>
            <form ref={formRef} className={styles.form__container}>
                <input
                    ref={emailRef}
                    type="email" 
                    placeholder="이메일" 
                    required
                    className={styles.input}
                />
                <input
                    ref={passwordRef}
                    type="password" 
                    placeholder="비밀번호" 
                    required
                    maxLength={20}
                    className={styles.input}
                />
                <input
                    type="submit" 
                    value={newAccount ? "회원가입" : "로그인"}
                    className={styles.btn}
                    onClick={onSubmit}
                    required
                />{error}
            </form>
            <p onClick={toggleAccount} className={styles.toggle}>
                {newAccount ? "로그인 할까요?" : "가입 할까요?"}
            </p>
        </section>
    )
};

export default EmailAuth;