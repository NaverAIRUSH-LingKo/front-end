import ChatroomHeader from '../components/ChatroomHeader';
import ChatScenario from '../components/ChatScenario'
import ChatWindow from '../components/ChatWindow';
import InputBar from '../components/InputBar';
import { useState } from 'react';


import React from 'react';

const LinTalk = () => {

  const [mission, setMission] = useState('은행직원에게 방문 이유 설명하기')

  const [messages, setMessages] = useState([
    { id: 1, sender: 'ai', content: '안녕하세요, 어떤 업무로 오셨나요?', type: 'message' },
  ]);

  const [scenario, setScenario] = useState({
    title: '은행직원',
    description: '은행업무를 위해 상담원과 통화 후 방문하여 모르는 부분을 질문합니다.'
  });

  const addMessage = (message) => {
    setMessages([...messages, message]);
  }; 

  return (
    <div className="LinTalk">
      <ChatroomHeader title="은행 업무 대화하기" />
      <ChatScenario title={scenario.title} description={scenario.description} />
      <ChatWindow messages={messages} mission={mission} />
      <InputBar onSend={addMessage} />
    </div>
  );
};

export default LinTalk;
