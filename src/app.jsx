import React,{useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/nawitter-home/home';
import Login from './components/login/login';
import styles from './app.module.css';
import Profile from './components/profile/profile';

function App({authService,firestoreService}) {
  const [isLoggedIn, setIsLoggedIn]=useState(false);
  const [userObj,setUserObj]=useState(null);
  const [init, setInit]=useState(false);

  useEffect(()=>{
    authService
    .onAuthChange((user)=>{
      if(user){
        setIsLoggedIn(true);
        setUserObj({...user, 
          displayName: user.displayName===null ? "anonymous" : user.displayName});
      } else{
        setIsLoggedIn(false);
      }
      setInit(true);
    })
  },[]);

  return (
    <div className={styles.app}>
      {init ? (
        <Router>
        {isLoggedIn && (
          <nav className={styles.container}>
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
          </nav>
        )}
        <Routes>
          {isLoggedIn ? 
            (
              <>
                <Route path="/" element={<Home userObj={userObj} firestoreService={firestoreService}/>}/>
                <Route path="/profile" element={<Profile authService={authService} userObj={userObj}/>} />
              </>
            )
          :
            <Route path="/" element={<Login authService={authService}/>}/>
          }
        </Routes>
      </Router>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}

export default App;
