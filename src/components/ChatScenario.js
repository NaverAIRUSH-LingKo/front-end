import React from 'react';
import '../css/ChatScenario.css';
import partnerProfile from '../images/partner-profile.svg';

const ChatScenario = ({ title, description }) => {
    return (
        <div className="chat-scenario">
            <div className='scenario-partner'>
              <img src={partnerProfile} alt="partner-profile"/>
              <h2 style={{marginLeft: '2rem', marginTop: '1rem'}}>{title}</h2>
            </div>
            <div className='scenario-description'>
                <div className='scenario-tag'>시나리오</div>
                <div className="scenario-description-txt">{description}</div>
            </div>
        </div>
    );
};

export default ChatScenario;
