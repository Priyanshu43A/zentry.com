import React from 'react'
import Loader from './components/loader/Loader'
import "./index.css";
import useTheme from './hooks/UseTheme';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <Loader />
      <div className='theme-btn'> 
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  )
}

export default App
