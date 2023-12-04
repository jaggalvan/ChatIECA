// En ChatRoomList.js
import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';  
import { firestore } from './firebase';  

const ChatRoomList = ({ onSelectRoom }) => {
  const [chatRooms, setChatRooms] = useState([]);

  useEffect(() => {
    const chatRoomsRef = collection(firestore, 'chatRooms');

    const unsubscribe = onSnapshot(chatRoomsRef, (snapshot) => {
      const roomList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      console.log('Salas de chat:', roomList);
      setChatRooms(roomList);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2>Salas de Chat</h2>
      <ul>
        {chatRooms.map(room => (
          <li key={room.id} onClick={() => onSelectRoom(room.id)}>
            {room.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatRoomList;

