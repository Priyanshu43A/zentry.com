import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/loader/Loader';
import "./index.css";
import useTheme from './hooks/UseTheme';
import ThemeToggle from './components/ThemeToggle';
 
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Router>
      <div className={`app ${theme}`}>
        <div className='theme-btn'> 
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />


          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

