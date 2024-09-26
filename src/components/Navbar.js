import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/">홈</Link>
            <Link to="/lintalk-access">채팅 접속</Link>
            <Link to="/my-learning">내 학습</Link>
            <Link to="/lintalk">링톡</Link>
        </nav>
    );
};

export default Navbar; // 기본 내보내기
