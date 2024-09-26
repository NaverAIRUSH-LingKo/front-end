import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './css/App.css';

import Home from './pages/Home';
import LinTalk from './pages/LinTalk';
import LinTalkAccess from './pages/LinTalkAccess';
import MyLearn from './pages/MyLearn';


function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/lintalk-access" element={<LinTalkAccess/>}/>
        <Route path="/mylearn" element={<MyLearn/>}/>
        <Route path="/lintalk" element={<LinTalk/>}/>
      </Routes>
      </div>
    </Router>
    
  );
}

export default App;
