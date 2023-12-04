import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

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
  const auth = getAuth(app);
  const firestore = getFirestore(app);
  
  export { auth, firestore };
