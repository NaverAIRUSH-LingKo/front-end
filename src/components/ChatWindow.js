import React from 'react';
import Message from './Message';
import Mission from './Mission';
import '../css/ChatWindow.css'

const ChatWindow = ({ messages, mission}) => {
  return (
    <div className="chat-window">
      <Mission mission={mission}/>
      {messages.map((message) => (
        <Message key={message.id} sender={message.sender} content={message.content} type={message.type} />
      ))}
    </div>
  );
};

export default ChatWindow;
