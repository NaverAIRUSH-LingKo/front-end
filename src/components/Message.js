import React from 'react';

const Message = ({ sender, content, type }) => {
  const isUser = sender === 'user'; // sender가 'user'인 경우만 true

  return (
    <div className={`message-${isUser ? 'user-message' : 'ai-message'}`}>
      {type === 'mission' && <span className="mission-label">mission</span>}
      <span className="message-content">
        {content}
      </span>
    </div>
  );
};

export default Message;
