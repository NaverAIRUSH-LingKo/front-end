import React, { useState } from 'react';
import '../css/PartnerOption.css';

// OptionButton 컴포넌트
const OptionButton = ({ text, isSelected, onClick }) => {
  return (
    <button 
      className={`option-button ${isSelected ? 'selected' : ''}`} 
      onClick={onClick}
    >
      {text}
    </button>
  );
};

// OptionButtonList 컴포넌트
const OptionButtonList = ({ title, description, options }) => {
  // 선택된 버튼의 인덱스를 저장하는 상태 변수
  const [selected, setSelected] = useState(null);

  return (
    <div className="option-section">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="button-list">
        {options.map((option, index) => (
          <OptionButton 
            key={index} 
            text={option} 
            isSelected={selected === index} // 선택 여부 확인
            onClick={() => setSelected(index)} // 버튼 클릭 시 인덱스를 상태로 설정
          />
        ))}
      </div>
    </div>
  );
};

export default OptionButtonList;
