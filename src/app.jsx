import React,{useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './app.module.css';
import Home from './components/nawitter-home/home';
import Login from './components/login/login';
import Profile from './components/profile/profile';
import Navigation from './components/navigation/navigation';
import { StorageProvider } from './context/StorageContext';

function App({authService,firestoreService}) {
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
      <StorageProvider>
        {init ? (
          <Router>
            {Boolean(userObj) && <Navigation />}
            <Routes>
              {Boolean(userObj) ? 
                (
                  <>
                    <Route path="/" element={<Home 
                      userObj={userObj} 
                      firestoreService={firestoreService} 
                      />}
                    />
                    <Route path="/profile" element={<Profile 
                      authService={authService} 
                      userObj={userObj} 
                      refreshUser={refreshUser}
                      firestoreService={firestoreService}/>}
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
      </StorageProvider>
    </div>
  );
}

export default App;
