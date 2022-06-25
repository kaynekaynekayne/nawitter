import React,{useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/nawitter-home/home';
import Login from './components/login/login';
import styles from './app.module.css';

function App({authService}) {
  const [isLoggedIn, setIsLoggedIn]=useState(false);

  useEffect(()=>{
    authService
    .onAuthChange((user)=>{
      user && setIsLoggedIn(true);
    })
  },[]);

  return (
    <div className={styles.app}>
      <Router>
        <Routes>
          {isLoggedIn ? 
            <Route path="/" element={<Home />}/>
          :
            <Route path="/" element={<Login authService={authService}/>}/>
          }
        </Routes>
      </Router>
    </div>
  );
}

export default App;
