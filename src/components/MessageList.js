// src/components/MessageList.js
import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy } from 'firebase/firestore';
import { firestore } from './firebase'; 


const MessageList = ({ roomName }) => {
  const [messages, setMessages] = useState([]);

// En MessageList.js
useEffect(() => {
  const chatRef = firestore.collection('chatRooms').doc(roomName).collection('messages');
 
  const unsubscribe = chatRef.orderBy('timestamp').limit(20).onSnapshot((snapshot) => {
    const messageList = snapshot.docs.map(doc => {
      const data = doc.data();
      console.log('Datos del mensaje:', data); // Agrega este log
      return { id: doc.id, ...data };
    });

    setMessages(messageList);
  });

  return () => unsubscribe();
}, [roomName]);
  return (
    <div>
      {messages.map(message => (
        <div key={message.id}>
          <strong>{message.sender}:</strong> {message.text}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
