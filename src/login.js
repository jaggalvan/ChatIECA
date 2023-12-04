// login.js
import React, { useState } from 'react';
import { auth, firestore } from './components/firebase';  // Ajusta la ruta según tu estructura
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Iniciar sesión con correo y contraseña
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Agregar el usuario al chat en Firestore
      const chatUsersRef = collection(firestore, 'chatUsers');
      await addDoc(chatUsersRef, { userId: user.uid, email: user.email });
    } catch (error) {
      // Manejar errores de autenticación
      console.error('Error al iniciar sesión:', error.message);
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
};

export default Login;
