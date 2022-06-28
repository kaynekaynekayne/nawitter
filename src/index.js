import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import AuthService from './service/auth_service';
import NawitService from './service/nawit_service';
import { app } from './service/firebase';

const authService=new AuthService(app);
const nawitService=new NawitService(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
      authService={authService}
      nawitService={nawitService}
    />
  </React.StrictMode>
);
