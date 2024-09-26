import React, { useState } from 'react';
import '../css/InputBar.css'; // CSS 파일 연결

const InputBar = ({ onSend }) => {
  const [inputValue, setInputValue] = useState('');
  const [isUser, setIsUser] = useState(true);

  // 전송자 전환을 위한 함수
  const toggleSender = () => {
    setIsUser((prevIsUser) => !prevIsUser);
  };

  const handleSend = () => {
    if (inputValue.trim()) {
      // 메시지를 전송
      onSend({
        id: Date.now(),
        sender: isUser ? 'user' : 'ai',
        content: inputValue,
        type: 'message'
      });
      setInputValue(''); // 입력창 초기화
    }
  };

  return (
    <div className="input-bar-container">
      {/* 태그 버튼 목록 */}
      <div className="tag-buttons">
        <button className="tag-button">통장 만들기</button>
        <button className="tag-button">예금</button>
        <button className="tag-button">적금 상품</button>
        <button className="tag-button reward-button">⚡ +20</button>
      </div>

      {/* 입력창과 전송 버튼 */}
      <div className="input-bar">
        <button onClick={toggleSender} className="emoji-button">
          {isUser ? '😊' : '🤖'}
        </button>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="메시지를 입력하세요..."
          className="message-input"
        />
        <button onClick={handleSend} className="send-button">
          <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
            <path d="M2.01 21L23 12 2.01 3v7l15 2-15 2z" fill="#ffffff" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default InputBar;
