import React, { useState } from 'react';
import ChatHeader from '../components/ChatHeader.js';
import PartnerOption from '../components/PartnerOption.js'
import Scenario from '../components/Scenario.js'

const LinTalkAccess = () => {


  return (
    <div className="lintalk-access">
      <ChatHeader/>
      <PartnerOption
        title="대화 상대 선택"
        description="상대에 따라 달라지는 대화 미션을 수행해보세요."
        options={['은행 직원', '전화 상담원']}
      />
      <Scenario/>

    </div>
  );
};

export default LinTalkAccess;
