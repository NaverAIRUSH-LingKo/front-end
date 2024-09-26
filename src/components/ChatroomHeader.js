import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ChatroomHeader.css'
import backIcon from '../images/back-icon.svg'
import closeIcon from '../images/close-icon.svg'


const ChatroomHeader = ({ title }) => {
  return (
    <header className="chatroom-header">
      <Link to="/lintalk-access">
        <img src={backIcon}/>
      </Link>
      <h1>{title}</h1>
      <img src={closeIcon}/>
    </header>
  );
};

export default ChatroomHeader;
