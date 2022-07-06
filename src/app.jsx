import React,{useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/nawitter-home/home';
import Login from './components/login/login';
import styles from './app.module.css';
import Profile from './components/profile/profile';

function App({authService,firestoreService,storageService}) {
  const [userObj,setUserObj]=useState(null);
  const [init, setInit]=useState(false);

  useEffect(()=>{
    authService
    .onAuthChange((user)=>{
      if(user){
        setUserObj({ 
          displayName: user.displayName===null ? "anonymous" : user.displayName,
          uid:user.uid,
          updateProfile:()=>authService.updateNickname(user.displayName)
        });
      } else{
        setUserObj(null);
      }
      setInit(true);
    })
  },[]);

  const refreshUser=()=>{
    const user=authService.firebaseAuth.currentUser;
    setUserObj({ 
      displayName: user.displayName===null ? "anonymous" : user.displayName,
      uid:user.uid,
      updateProfile:()=>authService.updateNickname(user.displayName)
    })
  }

  return (
    <div className={styles.app}>
      {init ? (
        <Router>
        {Boolean(userObj) && (
          <nav className={styles.container}>
            <ul className={styles.navi}>
              <li>
                <Link to="/" aria-label="home">
                  <i id={styles.home} className="fas fa-home"></i>
                </Link>
              </li>
              <li>
                <Link to="/profile" aria-label="profile">
                  <i id={styles.profile} className="fas fa-cog">
                  </i>
                </Link>
              </li>
            </ul>
          </nav>
        )}
        <Routes>
          {Boolean(userObj) ? 
            (
              <>
                <Route path="/" element={<Home 
                  userObj={userObj} 
                  firestoreService={firestoreService} 
                  storageService={storageService}/>
                  }
                />
                <Route path="/profile" element={<Profile 
                  authService={authService} 
                  userObj={userObj} 
                  refreshUser={refreshUser}
                  firestoreService={firestoreService}
                  />
                  }
                />
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
