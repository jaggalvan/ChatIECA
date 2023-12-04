import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const firebaseConfig = {
  apiKey: "AIzaSyBi6tTVJ56bymFmOuDlI7yvP7xpfOxiKmM",
  authDomain: "chatieca-f1f80.firebaseapp.com",
  projectId: "chatieca-f1f80",
  storageBucket: "chatieca-f1f80.appspot.com",
  messagingSenderId: "701840018548",
  appId: "1:701840018548:web:9e8985e1b0ba2c542c9521",
  measurementId: "G-W4H61Y9NZG"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { firestore, auth };  // Exporta firestore y auth

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
