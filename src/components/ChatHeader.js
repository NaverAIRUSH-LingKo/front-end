import React from 'react';
import pinkLinko from '../images/pinkLinko.svg'
import TagList from './TagList';
import '../css/ChatHeader.css';

const ChatHeader = () => {
  return (
      <div className="header">
            <div className="header-content">
                <h1 className="title">은행 업무 대화하기</h1>
                <span className="status-badge">진행중</span>
                <div className="header-image">
            </div>
            <div className='header-image'>
                <img src={pinkLinko} alt="PinkLinko" />
            </div>
        </div>
        
        <div className='header-txt'>
            <span>은행업무를 위해 상담원과 통화 이후 은행을 방문하여 은행 직원에게 모르는 부분을 질문합니다.</span>
        </div>
        <TagList tags={['#은행업무', '#통장관리', '#금융용어']} />
    </div>
    
  );
};

export default ChatHeader;
