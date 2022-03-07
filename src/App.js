import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Router>
        <>
          <Routes>
            <Route path='/' exact element={<Header />} />
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
