import React from 'react'
import Loader from './components/loader/Loader'
import "./index.css";
import useTheme from './hooks/UseTheme';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <Loader />
      <button onClick={toggleTheme}>
          Switch to {theme === 'dark' ? 'Light' : 'Dark'} Theme
        </button>
    </div>
  )
}

export default App
