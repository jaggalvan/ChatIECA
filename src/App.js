import React, { useEffect, useState } from 'react';
import { auth, firestore } from './components/firebase'; 
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, onSnapshot } from 'firebase/firestore';
import Login from './login'; 
import ChatRoomList from './components/ChatRoomList';
import ChatRoom from './components/ChatRoom';

const App = () => {
  const [user, setUser] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('Usuario autenticado:', user); 
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      // Cerrar sesión
      await signOut(auth);
      setSelectedRoom(null); // Limpiar la sala seleccionada al cerrar sesión
    } catch (error) {
    
      console.error('Error al cerrar sesión:', error.message);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Bienvenido, {user.email}</h2>
          <button onClick={handleLogout}>Cerrar Sesión</button>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }}>
              <ChatRoomList onSelectRoom={setSelectedRoom} />
            </div>
            <div style={{ flex: 3 }}>
              {selectedRoom ? <ChatRoom roomName={selectedRoom} /> : <p>Selecciona una sala de chat</p>}
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
