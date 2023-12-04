// src/components/MessageInput.js
import React, { useState } from 'react';
import { auth, firestore } from '../index';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const MessageInput = ({ roomName }) => {
  const [messageText, setMessageText] = useState('');

  const sendMessage = async () => {
    const trimmedMessage = messageText.trim();
    if (trimmedMessage !== '') {
      const user = auth.currentUser;

      if (user) {
        const message = {
          sender: user.displayName || user.email,
          text: trimmedMessage,
          timestamp: serverTimestamp(),
        };

        await addDoc(collection(firestore, 'chatRooms', roomName, 'messages'), message);
        setMessageText('');
      } else {
        console.error('Usuario no autenticado.');
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        placeholder="Escribe tu mensaje..."
      />
      <button onClick={sendMessage}>Enviar</button>
    </div>
  );
};

export default MessageInput;
