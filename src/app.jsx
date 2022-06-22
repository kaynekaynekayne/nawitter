import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/nawitter-home/home';
import Login from './components/login/login';
import styles from './app.module.css';

function App({isLoggedIn}) {
  return (
    <div className={styles.app}>
      <Router>
        <Routes>
          {isLoggedIn ? 
            <Route path="/" element={<Home />}/>
          :
            <Route path="/" element={<Login />}/>
          }
        </Routes>
      </Router>
    </div>
  );
}

export default App;
