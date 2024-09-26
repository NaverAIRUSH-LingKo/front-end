import React from 'react';
import { Link } from 'react-router-dom';
import '../css/App.css';
import '../css/Scenario.css';
import Tag from './Tag';

const Scenario = () => {
  return (
    <div className="scenario-section">
        <div className='scenario-tag'>
            시나리오
        </div>
        
      <p className="scenario-description">
        은행 업무를 위해 상담원과 통화 후 은행을 방문하여, 은행 직원에게 모르는 부분을 질문합니다.
      </p>
      <div className="button-group">
        <button className="continue-button">이어서 하기</button>
        <Link to="/lintalk"> 
          <button className="restart-button">새로 시작하기</button>
        </Link>
        
      </div>
    </div>
  );
};

export default Scenario;
