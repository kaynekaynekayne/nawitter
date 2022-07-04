import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import AuthService from './service/auth_service';
import FirestoreService from './service/firestore_service';
import { app } from './service/firebase';
import StorageService from './service/storage_service';

const authService=new AuthService(app);
const firestoreService=new FirestoreService(app);
const storageService=new StorageService(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
      authService={authService}
      firestoreService={firestoreService}
      storageService={storageService}
    />
  </React.StrictMode>
);
