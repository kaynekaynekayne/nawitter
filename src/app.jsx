import React,{useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/nawitter-home/home';
import Login from './components/login/login';
import styles from './app.module.css';
import Profile from './components/profile/profile';

function App({authService,nawitService}) {
  const [isLoggedIn, setIsLoggedIn]=useState(false);
  const [userObj,setUserObj]=useState(null);

  useEffect(()=>{
    authService
    .onAuthChange((user)=>{
      if(user){
        setIsLoggedIn(true);
        setUserObj(user);
      } else{
        setIsLoggedIn(false);
      }
    })
  },[]);

  return (
    <div className={styles.app}>
      <Router>
        <nav className={styles.container}>
          {isLoggedIn && (
            <ul className={styles.navi}>
              <li>
                <Link to="/">
                  <i id={styles.home} className="fas fa-home"></i>
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  <i id={styles.profile} className="fas fa-cog">
                  </i>
                </Link>
              </li>
            </ul>
          )}
        </nav>
        <Routes>
          {isLoggedIn ? 
            (
              <>
                <Route path="/" element={<Home userObj={userObj} nawitService={nawitService}/>}/>
                <Route path="/profile" element={<Profile authService={authService} userObj={userObj}/>} />
              </>
            )
          :
            <Route path="/" element={<Login authService={authService}/>}/>
          }
        </Routes>
      </Router>
    </div>
  );
}

export default App;
