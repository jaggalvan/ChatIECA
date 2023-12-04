// src/components/ChatRoom.js
import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const ChatRoom = ({ roomName }) => {
  return (
    <div>
      <h2>Grupo: {roomName}</h2>
      <MessageList roomName={roomName} />
      <MessageInput roomName={roomName} />
    </div>
  );
};

export default ChatRoom;
